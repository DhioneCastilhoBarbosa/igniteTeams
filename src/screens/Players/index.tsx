import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styled";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import {ButtonIcon} from "@components/ButtonIcon"
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import {Alert, FlatList} from "react-native"
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpyt } from "@components/ListEmpyt";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppErro";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";


type RouteParams = {
  group: string;
}

export function Players(){
  const [team, setTeam] = useState('Time A')
  const [player, setPlayer] = useState([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const route = useRoute()
  const {group} = route.params as RouteParams

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Nova pessoa', 'Digite o nome da pessoa para adicionar.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try{
      await playerAddByGroup(newPlayer, group)
      const players = await playersGetByGroup(group)
      console.log(players)
    }catch(error){
     if(error instanceof AppError){
       Alert.alert('Nova pessoa', error.message)
    }else{
      console.log(error)
      Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
    }

   }
  }


  return(
    <Container>
      <Header showBackButton/>
      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayer}
        />
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