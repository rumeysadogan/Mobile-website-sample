import React,{Component} from 'react'
import {View,Text, StyleSheet, Image} from 'react-native'
export default class AboutScreens extends Component {
constructor(props){
super(props)
}
render(){
return (

<View style={this.styles.mainContainer}>
    <View style={this.styles.txtContainer1}>
        <Text style={this.styles.txt1}>WELCOME TO ACRUX </Text>
        <Text style={this.styles.txt2}>Design Accelerating (Ready to Use | Custom) Solutions <br/>
            Defense | Network | Gateway | (I)IoT | Medical | ADAS | HMI
        </Text>
    </View>

    <View style={{flex:1}}>
          <Image source={require("../../assets/pcb2.jpg")} style={{height:300, weight:100}} ></Image>
    </View>

    <View style={this.styles.txtContainer2}>
        <Text style={this.styles.txt3}>Ready to Use Solutions</Text>
        <Text style={this.styles.txt4}>We serve high-tech hardware and software modules for your designs and products <br/>
            <br/>We work with you for integrating our high-tech hardware and software modules to your designs and products
        </Text>
    </View>
    
    <View style={{flex:1}}>
          <Image source={require("../../assets/i.png")} style={{height:300, weight:100}} ></Image>
    </View>

        <View  style={this.styles.txtContainer2}>
            <Text style={this.styles.txt3}> Custom Solutions </Text>
            <Text style={this.styles.txt4}>
            We plan, design, test and produce custom high-tech hardware and software for your system requirements
            <br/> <br/>
            We work with you to determine your system requirements
            </Text>
        </View>

    </View>);
}
styles= StyleSheet.create({
    
    mainContainer:{
        backgroundColor:"white",
    },
    txtContainer1:{
        alignItems:"center",
        justifyContent:"center",
       
   
    },
    txtContainer2:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
    },
    txt1:{
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        margin:10,
        fontWeight:"bold",
        fontSize:35,
    },
    txt2:{
        alignItems:"center",
        justifyContent:"center",
        margin:20,
        fontSize:20,
        color:"#ABABAB",
      

    },
    txt3:{
       
        padding:5,
        margin:5,
        fontSize:30,
    },
    txt4:{
        margin:20,
        fontSize:20,
        color:"#ABABAB",

    },
    txtContainer3:{
        alignItems:"center",
        justifyContent:"center",
        
    },
});
}
