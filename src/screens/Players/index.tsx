import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styled";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import {ButtonIcon} from "@components/ButtonIcon"
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import {FlatList} from "react-native"
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpyt } from "@components/ListEmpyt";
import { Button } from "@components/Button";


type RouteParams = {
  group: string;
}

export function Players(){
  const [team, setTeam] = useState('Time A')
  const [player, setPlayer] = useState([])

  const route = useRoute()
  const {group} = route.params as RouteParams


  return(
    <Container>
      <Header showBackButton/>
      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add"/>
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({item}) =>( 
          <Filter title={item}
            isActive = {item === team}
            onPress={() => setTeam(item)}
          />
        )}
          horizontal
          />
        <NumbersOfPlayers>
          {player.length}
        </NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={player}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard 
          name={item}
          onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpyt
            message="Não pessoas neste time"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle= {[
          {paddingBottom: 100},
          player.length === 0 && {flex:1}
        ]}
      />
      <Button 
        title="Remover Turma"
        type="SECONDARY"
      />
      
    </Container>
  )
}