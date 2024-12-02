import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { customStyles } from '../src/styles';

// Monster image and name after scanning barcode
export default function MonsterModal({code, monsterData, setScanned, setPlayerInFight}) {
    return(
        <View style={ [styles.scannedModal, customStyles.dropShadow] }>
            <Text style={customStyles.bigText}>Scan successful</Text>
            <Text style={customStyles.normalText}>{code}</Text>
            <Text style={customStyles.normalText}>{monsterData.name}</Text>
            <Image
                style={[styles.monsterImage, customStyles.dropShadow] }
                source={{ uri: `${monsterData.images[0].href}` }}
            />
            
            <View style={styles.buttonsContainer} >
                <Pressable 
                    style={styles.button}
                    onPress={() => setScanned(false) } 
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
            
                <Pressable 
                    style={styles.button}
                    onPress={() => setPlayerInFight(true) } 
                >
                    <Text style={styles.buttonText}>Fight</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scannedModal: {
      backgroundColor:'#001f33',
      flexDirection: "column",
      justifyContent: "center",
      alignItems:'center',
      textAlign:'center',
      width:'100%',
      height:'100%',
      paddingTop:30,
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
      marginBottom:0,
      backgroundColor:'black',
      boxShadow:'inset 5px 5px 5px black',
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
    }
  });

