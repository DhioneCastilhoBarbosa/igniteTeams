
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PlayerStorageDTO} from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { playersGetByGroup } from './playersGetByGroup';
import { AppError } from '@utils/AppErro';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group:string) {
  try{
    const storedPlayers = await playersGetByGroup(group)
    const playerAllReadyExist = storedPlayers.filter(player=> player.name === newPlayer.name)

    if(playerAllReadyExist.length > 0){
      throw new AppError('Essa pessoa ja esta adicionada em um time.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  }catch(error){
    throw error;
  }
}