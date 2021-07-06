import React,{useEffect,useState} from 'react';
import { View, Text, ScrollView,FlatList,StyleSheet } from 'react-native';
import axios from 'axios';
const Home = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get(`https://restcountries.eu/rest/v2/all?fiels=name;flag;callingCodes`
      
    )
      .then((response) => response.data).then(result => {
        console.log(result)
        setdata(result)
        
      }

      )
      .catch((error) => {
        console.log(error)
      })
    },[])
    
    return ( 
        <View>
      <FlatList
       data={data}
        renderItem={({item,index}) =>
        <View key={index} style={{padding:"5%",}}><Text style={{backgroundColor:"yellow",left:1,width:"100%",color:"red",padding:"5%",}}>{item.name}</Text>
        </View>}
      />
    </View>
  );
}
export default Home;