import React,{Component} from 'react'
import {View,Text, TouchableOpacity,StyleSheet, Button,Image, ScrollView, } from 'react-native'


export default class HomeScreens extends Component {
constructor(props){
super(props);
}
render(){
return (
<ScrollView>
    
        <View style={this.styles.mainContainer}>
            <Text style={this.styles.baslik}> TECHNOLOGY FOR YOU</Text> <br/>
            <Text style={this.styles.txt}>We Love Hardware & Software</Text>
        <View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Contact")}}> 
            <Text style={this.styles.btn}> Get In Touch </Text>
            </TouchableOpacity>
        </View>
        </View>



        <View style={{flex:3}}>
          <Image source={require("../../assets/pcb.jpg")} style={{height:450, weight:150}} ></Image>
    </View>
    
</ScrollView>
)}

styles=StyleSheet.create({
    mainContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:6,
       
    },
    baslik:{
         fontWeight:"bold",
         fontSize:40,
         justifyContent:"center",
        alignItems:"center",
       
    },
    btn:{
        padding:17,
        margin:25,
        fontSize:18,
        borderRadius:25,
        backgroundColor:"#881C1C",
        color:"white",
    },
    txt:{
        color:"#ABABAB",
        fontSize:20,
    },
    imgContainer:{
        justifyContent:"center",
        alignItems:"center",
     
       flex:1,
       borderColor:"black",
       borderWidth:"3"
    },
    img:{
       height:100,
       weight:100,
   }
})
}
