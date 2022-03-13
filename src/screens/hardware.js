import React,{Component} from 'react'
import {View,Image, ScrollView, StyleSheet, Text} from 'react-native'
export default class HardwareScreens extends Component {
constructor(props){
super(props)
}
render(){
return (
    <ScrollView  style={this.styles.mainContainer}>
        <View style={this.styles.maintag}>
             <Text style={this.styles.maintag}> HARDWARE SKILLS </Text>
        </View>
       
        <View style={this.styles.firstContainer}>
            <Text style={{fontSize:28,color:"white", fontWeight:"bold"}}>  <br/>LOW-END <br/> 2-4 Layers  <br/></Text>
            <ul>
                <li>8/16/32-bit MCU based HW</li><br/>
                <li>CPLD based HW</li><br/>
                <li>SDRAM Memory Interfaces</li><br/>
                <li>Low Speed Bus Interfaces(SPI, UART, I2C, etc.)</li><br/>
                <li>Low Speed Communication Interfaces(10/100Base-T, USB 2.0, CAN, LIN, etc.)</li><br/>
                <li>Wireless Sensor Nodes(802.11b/g/n, BLE 4/5, Thread, LoRa, NB-IoT)</li><br/>
                <li>Audio Interfaces(I2S, S/PDIF, SAI, etc.)</li><br/>
                <li>Audio Interfaces(I2S, S/PDIF, SAI, etc.)</li><br/>
            </ul>
        </View>

        <View style={this.styles.secondContainer}>
            <Text style={{fontSize:28,color:"white", fontWeight:"bold"}}>  <br/>MID-RANGE<br/> 6-10 Layers  <br/></Text>
            <ul>
                  
                    <li>32/64-bit MPU/SoC based HW</li><br/>
                    <li>Mid-Range FPGA based HW</li><br/>
                    <li>DSP based HW</li><br/>
                    <li>DDR2/LPDDR2/DDR3/DDR3L Memory Interfaces</li><br/>
                    <li>High Speed Bus Interfaces(SD, SDIO, eMMC, etc.)</li><br/>
                    <li>High Speed Communication Interfaces(1G/2.5Base-T, USB 3.0, PCIe Gen1/2, SerDes, etc.)</li><br/>
                    <li>High Speed Fibre Interfaces(SFP, SFP+)</li><br/>
                    <li>Wireless Networks(802.11ac/ax MIMO, 4G LTE)</li><br/>
                    <li>Video Interfaces(Multi Channel LVDS, HDMI, DP, DSI, CSI etc.)</li><br/>
            </ul>
        </View>
        
        <View style={this.styles.thirdContainer}>
            <Text style={{fontSize:28, color:"white", fontWeight:"bold"}}>  <br/>HIGH-END <br/> 12+ Layers  <br/></Text>
            <ul>               
                  <li>64-bit Network Processor based HW</li><br/>
                  <li>High-End FPGA based HW</li><br/>
                  <li>GPU based HW</li><br/>
                  <li>ACAP based HW</li><br/>
                  <li>DDR4/LPDDR4 Memory Interfaces</li><br/>
                  <li>Ultra High Speed Bus Interfaces(PCIe Gen3/4, NVMe, AMBA, AXI4, Wishbone)</li><br/>
                  <li>Ultra High Speed Chip2Chip Interfaces(Aurora, etc.)</li><br/>
                  <li>Ultra High Speed Fibre Interfaces(QSFP, QSFP+)</li><br/>
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
