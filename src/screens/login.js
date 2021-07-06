import React from 'react';
import { View, Text,Button, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';

const Log = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LOGIN</Text>
            <TextInput 
            style={styles.place}
            placeholder="USERNAME"/>
             <TextInput 
            style={styles.place2}
            placeholder="PASSWORD"
            secureTextEntry={true}/>
            <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('Home')}>
            <Text style={{paddingLeft:"25%",paddingTop:"5%"}}>SIGN IN</Text>
            </TouchableOpacity>
           <Text style={styles.text1}>FORGOT PASSWORD?</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"green",
        height:"100%"
    },
    text:{
left:"35%",
top:"35%",
color:"#fff",
fontSize:20
    },
    place:{
        top:"35%",
        left:"5%",
        width:"70%",
       padding: "10%",
      borderBottomEndRadius:5
    },
    place2:{
        top:"30%",
        left:"5%",
        width:"70%",
       padding: "10%",
      borderBottomEndRadius:5
    },
    touch:{
        backgroundColor:"#fff",
        width:"30%",
        top:"30%",
        left:"30%",
        height:"5%",
    },
    text1:{
        color:"#fff",
        top:"32%",
        left:"29%"
    }

})
export default Log;