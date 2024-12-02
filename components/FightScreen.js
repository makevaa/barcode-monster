import { useState } from 'react';
import { StyleSheet, Text, View,  Image, Pressable } from 'react-native';
import { customStyles } from '../src/styles';

import { ranNum } from '../src/utility';
import HealthBar from './HealthBar';

export default function FightScreen( {exitFight, monsterData} ) {
    const maxHp = 100;
    const [hp, setHp] = useState(maxHp);
    const [hpBarWidth, setHpBarWidth] = useState('100%')

    const getHealthBarWidth = () => {
        const percent = Math.floor(hp/maxHp * 100);
        setHpBarWidth(percent);
    }

    const attack = () => {
        const damage = ranNum(5, 10);
        if (hp > 0) {
            setHp(hp-damage);
            getHealthBarWidth();
        }

        if (hp <= 0) {
            exitFight(true);
        }
    }

  return (
    <View style={styles.container}>
        <Text style={customStyles.bigText}>{monsterData.name}</Text>
        <Image
            style={[styles.monsterImage, customStyles.dropShadow] }
            source={{ uri: `${monsterData.images[0].href}` }}
        />

        <HealthBar hpBarWidth={hpBarWidth}/>

       <View style={styles.buttonsContainer} >
            <Pressable 
                style={styles.button}
                onPress={() => exitFight(false) } 
            >
            <Text style={styles.buttonText}>Retreat</Text>
            </Pressable>
        
            <Pressable 
                style={styles.button}
                onPress={() => attack() } 
            >
            <Text style={styles.buttonText}>Attack</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001f33',
    paddingTop:20,
    width:'100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4caaf5',
    boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.9)',
    width:'45%',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 31,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  buttonsContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems:'center',
    width:'100%'
  },
  monsterImage: {
    borderWidth:3,
    borderRadius:10,
    borderColor:'black',
    width:250,
    height:250,
    padding:50,
    transition:'all 0.5s',
    marginTop:20,
    marginBottom:20,
    backgroundColor:'black',
    boxShadow:'inset 5px 5px 5px black',
  },
});