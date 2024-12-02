import { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList  } from 'react-native';
import { DataContext } from "../src/myContext";

export default function MonstersScreen( ) {
    const data = useContext(DataContext);
    const listData = data.defeatedMonsters;

  return (
    <View style={styles.container}>
        <Text style={{color:'white', fontSize:25, padding: 10}}>Defeated monsters</Text>
        <FlatList
        data={listData}
        renderItem={ ({item}) =>
          	<View  style={ styles.listItem}>
                 <Image
                    style={ styles.monsterImage }
                    source={{ uri: `${item.image}` }} 
                />
                <Text style={ {fontSize:15, fontWeight:"bold", color:'white'} } >{item.name}</Text>
            </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    backgroundColor: '#001f33',
    paddingTop:40,
  },
  listItem: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '#001f33',
    color:'white',
    backgroundColor:'rgba(0, 0, 0, 0.2)',
    padding:5,
    marginBottom:5,
  },
  monsterImage: {
    borderWidth:3,
    borderRadius:10,
    borderColor:'black',
    width:50,
    height:50,
    backgroundColor:'black',
    boxShadow:'inset 5px 5px 5px black',
    marginRight:5
  },
});
