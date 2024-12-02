import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useContext } from 'react';

import { DataContext } from '../src/myContext';
import { saveData } from '../src/save'


export default function SettingsScreen() {
    const data = useContext(DataContext);

    const resetData = () => {
        data.setDefeatedMonsters([])
        saveData([]);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>BarcodeMonster</Text>
        <Button  
            style={styles.button} 
            onPress={ () => {
                Alert.alert('Reset game save?', 'All game data (defeated monsters) will be deleted from local storage.', [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => resetData() }
                  ]);
            }}
            title="Reset save" 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#001f33',
    paddingTop:40,
  },
  title: {
    fontFamily:'BigNoodle',
    color:'white',
    fontSize:50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'darkred',
    boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.9)',
    width:'45%',
  }
});

  