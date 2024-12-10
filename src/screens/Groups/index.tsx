import React, { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpyt } from "@components/ListEmpyt";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";


export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  
  function handleNewGroup(){
    navigation.navigate('new')
  }
  return(
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
      
      <FlatList
        data={groups}
        keyExtractor={item=>item}
        renderItem={({item})=> (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={()=> ( 
          <ListEmpyt 
            message="Que tal cadastrar a primeira turma?"
          />
      )}
      />

      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
      
    </Container>
  )
}