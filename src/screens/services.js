import React,{Component} from 'react'
import {View,Text,StyleSheet, ScrollView} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQuestion, faUsers,faCaretRight,faCode,faMicrochip,faCheck } from "@fortawesome/free-solid-svg-icons";


export default class ServicesScreens extends Component {
constructor(props){
super(props)
}
render(){
return (
  <ScrollView  style={this.styles.mainContainer}>
      <View style={this.styles.maintag}>
        <Text style={this.styles.maintag}> OUR SERVISES </Text>
        <Text style={this.styles.txt}>Analyze & Propose & PoC & Design & Test & Production</Text>
      </View>

    
      <View>
      
      <FontAwesomeIcon icon={faQuestion}  style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Analyze</Text>
        <Text style={this.styles.txt}> We analyze your system requirements with you </Text>
      </View>   

      <View>
      <FontAwesomeIcon icon={faUsers}   style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Propose</Text>
        <Text style={this.styles.txt}> We propose a suitable design for the analyzed system requirements</Text>
      </View> 

      <View>
      <FontAwesomeIcon icon={faCaretRight}  style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Proof of Concept</Text>
        <Text style={this.styles.txt}>We develop Proof of Concept for critical system parts with our (Ready to Use | Custom) solutions</Text>
      </View> 

      <View>
      <FontAwesomeIcon icon={faCode}  style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Design</Text>
        <Text style={this.styles.txt}>We design turn-key hardware and software for your system</Text>
      </View> 

      <View>
      <FontAwesomeIcon icon={faCheck}  style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Test</Text>
        <Text style={this.styles.txt}> We prototype and test design with our unique unit test systems</Text>
      </View> 

      <View>
      <FontAwesomeIcon icon={faMicrochip}   style={this.styles.faItem} size={50} />
        <Text style={this.styles.txtContainer}>Production</Text>
        <Text style={this.styles.txt}>We go into mass production and supply tested systems</Text>
      </View> 

  </ScrollView>

);
}
styles=StyleSheet.create({
  mainContainer:{
      fontFamily:'Arial',
      
  },
  maintag:{
      justifyContent:"center",
      alignItems:"center",
      fontSize:35,
      fontWeight:"bold",
      margin:20,
   
  },
  txtContainer:{
    padding:5,
    fontSize:22,
    margin:10,

  },
  txt:{
    padding:5,
    fontSize:17,
    color:"#7B7B7B",
    justifyContent:"center",
    alignItems:"center",
    margin:10,
  },
   faItem:{
      color:"#AA2A2D",
      padding:5,
      margin:10,
    }

});
}




