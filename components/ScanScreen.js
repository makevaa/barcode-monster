import { useState, useContext  } from 'react';
import { StyleSheet, View } from 'react-native';

import { DataContext } from "../src/myContext";
import MyCamera from './MyCamera'
import MonsterModal from './MonsterModal'
import FightScreen from './FightScreen';

import { getRandomDigimon } from '../src/api';
import { saveData } from '../src/save';

export default function ScanScreen() {
    const data = useContext(DataContext);

    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState('');
    const [monsterData, setMonsterData] = useState( {name:'', images:[{href:''}] });
    const [playerInFight, setPlayerInFight] = useState(false);
 
    const exitFight = won => {
        if (won) {
            // Add defeated monster to save data
            const monster = {
                name: monsterData.name,
                image: monsterData.images[0].href
            }
            data.setDefeatedMonsters([...data.defeatedMonsters, monster]);
            saveData([...data.defeatedMonsters, monster]);
        }

        // Clear previous monster data
        setMonsterData({name:'', images:[{href:''}] });
        setPlayerInFight(false);
        setCode('');
        setScanned(false);
    }

    // Get random monster after scanning barcode
    const handleBarcodeScanned = async ({ type, data }) => {
        setScanned(true);
        setCode(data);
        // Get random digimon
        const monster = await getRandomDigimon();
        setMonsterData(monster); 
    };

  return (

    <View style={styles.container}>
        {playerInFight && (
            <FightScreen monsterData={monsterData} exitFight={exitFight}/>
        )}
   
        {!scanned && (
            <MyCamera 
                scanned={scanned} 
                setScanned={setScanned}
                handleScan={handleBarcodeScanned}
            />
        )}

        { (scanned && !playerInFight) && (
            <MonsterModal 
                monsterData={monsterData} 
                setScanned={setScanned} 
                setPlayerInFight={setPlayerInFight}
                code={code}
            />
        )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f33',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  }

});