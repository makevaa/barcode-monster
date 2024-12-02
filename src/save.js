import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const saveData = async (dataToSave) => {
    const saveStr = JSON.stringify(defeatedMonsters);
    try {
      await AsyncStorage.setItem('BarcodeMonsterSave', saveStr);
    } catch (error) {
      Alert.alert('Error when saving data');
    }
} 

export const readData = async () => {
    try {
        let data = await AsyncStorage.getItem('BarcodeMonsterSave');
        data = JSON.parse(data);
        console.log("loaded data");
        console.log(data);
        return data;
    } catch (error) {
        Alert.alert('Error when reading data');
    } 
} 
