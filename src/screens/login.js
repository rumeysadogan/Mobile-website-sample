import React,{Component} from 'react';
import {View,Text, TextInput, TouchableOpacity,StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default class LoginScreens extends Component {
constructor(props){
super(props);
}


render(){
return (
  <ScrollView style={{backgroundColor:"white",margin:0,padding:15}}>
         <br/>
        <Text style={{fontWeight:"bold", fontSize:16 ,margin:7}}>Address: </Text>
        <Text style={{ color:"#ABABAB",  fontSize:16,margin:7}}> 
           YDA Center 
           Dumlupınar Bulvarı Kızılırmak Mahallesi No:9/A 34th Floor 904 Çankaya/Ankara/Turkey 
        </Text> 
        <Text style={{fontWeight:"bold", fontSize:16,margin:7}}>Phone: </Text> 
        <Text style={{ color:"#ABABAB",  fontSize:16,margin:7}}> +90 (312) 552 25 25-26</Text>   

        <Text style={{fontWeight:"bold", fontSize:16,margin:7}}>Fax: </Text> 
        <Text style={{ color:"#ABABAB",  fontSize:16,margin:7}}>+90 (312) 552 25 27</Text> 

        <Text style={{fontWeight:"bold", fontSize:16,margin:7}}>Email: </Text>
        <Text style={{ color:"#ABABAB", fontSize:16,margin:7}}>info@acruxco.com</Text> 

  </ScrollView>
);
}
}
