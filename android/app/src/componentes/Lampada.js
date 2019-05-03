import React,{Component} from 'react'
import {View, Text, TouchableHighlight, Button} from 'react-native'

export default class Lampada extends Component{
    state = {
        interruptor : false,
        estado : 'Desligado'
    }

    ligada = () =>{
        var flag = 'Ligado'
        this.setState({interruptor: this.state.interruptor = !this.state.interruptor})
        if(this.state.interruptor==false){
        flag = 'Desligado'
        }
        if(this.state.interruptor==true){
        flag = 'Ligado'
        }
        this.setState({estado: this.state.estado = flag})

    }
    Desligada = () =>{
        this.setState({interruptor: this.state.interruptor = false})
        this.setState({interruptor: this.state.estado = 'Desligado'})

    }
    render(){
        return(
            <View>
               <Text style= {{fontSize: 40}}>{this.state.estado}</Text>
            <Button
            onPress={this.ligada}
            title="Ligar/Desligar"
            color="#006400"
            accessibilityLabel="Learn more about this purple button"
/>

            </View>
        )
    }
}