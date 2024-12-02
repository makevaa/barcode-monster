import { StyleSheet, View, } from 'react-native';

import Animated, {
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';


export default function HealthBar( {hpBarWidth} ) {
    
    const config = {
        duration: 50,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      };

      const style = useAnimatedStyle(() => {
        return {
          width: withTiming(hpBarWidth, config),
        };
      });

    return (
      <View style={styles.container}>
          <Animated.View style={[styles.bar, style]} />
      </View>
    )

}


const styles = StyleSheet.create({
    container: {
      width:'80%',
      height:30,
      //flexDirection: "row",
      //justifyContent: "center",
      //alignItems:'center',
      borderWidth:3,
      borderColor:'black',
      borderRadius:3,
      position:'relative',
      backgroundColor:'rgba(0, 0, 0, 0.99)',
      boxShadow:'0px 0px 5px 5px rgba(0, 0, 0, 0.5), 3px 3px 3px 0px rgba(0, 0, 0, 0.5)',



    },
    backgroundBar: {
        width:'100%',
        height:'100%',
        position:'absolute',
        backgroundColor:'rgb(118, 110, 0)',
        transition:'0.3s',
    },
    bar: {
        //width:'100%',
        height:'100%',
        position:'absolute',
        backgroundColor:'rgb(90, 0, 0);',
        transition:'0.05s',
    },
    glare: {
        width:'100%',
        height:'50%',
        position:'absolute',
        backgroundColor:'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
        zIndex:2,
    }

  });