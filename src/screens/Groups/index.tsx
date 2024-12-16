import React, { useCallback, useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Alert, FlatList } from "react-native";
import { ListEmpyt } from "@components/ListEmpyt";
import { Button } from "@components/Button";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAlls } from "@storage/group/groupsGetAlls";
import { Loading } from "@components/Loading";


export default function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  
  function handleNewGroup(){
    navigation.navigate('new')
  }

  async function fetchGroups(){
    try {
      setIsLoading(true)
      const data= await groupsGetAlls()
      setGroups(data)
      
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas','Não foi possível carregar as turmas')
    }finally{
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(()=>{
    fetchGroups()
  },[]))

  return(
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
      {isLoading ? <Loading/> : 
      <FlatList
        data={groups}
        keyExtractor={item=>item}
        renderItem={({item})=> (
          <GroupCard 
            title={item}
            onPress={()=> handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={()=> ( 
          <ListEmpyt 
            message="Que tal cadastrar a primeira turma?"
          />
      )}
      />
    }

      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
      
    </Container>
  )
}


