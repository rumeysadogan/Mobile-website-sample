import React,{Component} from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
export default class SoftwareeScreens extends Component {
constructor(props){
super(props);
}
render(){
return (
    <ScrollView  style={this.styles.mainContainer}>
        <View style={this.styles.maintag}>
             <Text style={this.styles.maintag}> SOFTWARE SKILLS </Text>
        </View>
              
        <View style={this.styles.firstContainer}>
            <Text style={{fontSize:28,color:"white", fontWeight:"bold",}}>  <br/>LOW-RANGE <br/> </Text>
            <ul>
                <li>BareMetal MCU Application Development</li> <br/>
                <li>Verilog, VHDL CPLD Application Development</li> <br/>
                <li>FreeRTOS MCU Application Development</li><br/>
                <li>Mbed OS MCU Application Development                    </li> <br/>
                <li>Zephyr OS MCU Application Development</li> <br/>
                <li>UI Application Development(LVGL, TouchGFX, etc.)</li> <br/>
                <li>IoT and Wireless Application Development(Ble, Thread, Lora, NbIoT)</li> <br/>
            </ul>
        </View>
        <View style={this.styles.secondContainer}>
            <Text style={{fontSize:28,color:"white", fontWeight:"bold"}}>  <br/>MID-RANGE <br/> </Text>
            <ul>
                <li>Board Support Package Development</li> <br/>
                <li>U-boot Bootloader Customization/Development</li> <br/>
                <li>Linux Kernel Customization/Development</li> <br/>
                <li>Linux Device Driver Customization/Development</li> <br/>
                <li>Root File System Customization/Development</li> <br/>
                <li>BareMetal FPGA(SoftProcessor) Design/Application Development</li> <br/>
                <li>OS/RTOS FPGA(SoftProcessor) Design/Application Development</li> <br/>
                <li>UI Application Development(Qt | QML, SDL, GTK, TotalCross, etc.)</li> <br/>
                <li>(I)Iot Web Server Application Development</li> <br/>
            </ul>
        </View>


        <View style={this.styles.thirdContainer}>
            <Text style={{fontSize:28, color:"white", fontWeight:"bold"}}>  <br/>HIGH-END <br/> </Text>
            <ul>               
                <li>Verilog, VHDL IP Core Development</li> <br/>
                <li>HLS IP Core Development</li> <br/>
                <li>AXI, AXIS IP Core Development</li> <br/>
                <li>Custom IP Core Device Driver Development</li> <br/>
                <li>QEMU Based Simulation Environment for MCU/MPU/FPGA Applications</li> <br/>
            </ul>
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
        firstContainer:{
            color:"white",
            backgroundColor:"#AA2A2D",
            justifyContent:"center",
            alignItems:"center",
           padding:2,
           margin:2,
        },
        secondContainer:{
            color:"white",
            backgroundColor:"#312F2F",
            justifyContent:"center",
            alignItems:"center",
        },
        thirdContainer:{
            color:"white",
            backgroundColor:"#AA2A2D",
            justifyContent:"center",
            alignItems:"center",
        }

    });
}
