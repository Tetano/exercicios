import React,{Component} from 'react'
import {View, Text, Button,TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Calcular extends Component{
    state = {
      campo1: null,
      campo2: null
    }
    alterartexto1 = campo1 =>{
        this.setState({campo1})

    }
    alterartexto2 = campo1 =>{
        this.setState({campo1})

    }

    render(){
        return(
            <View>
                <TextInput value={this.state.campo1} // da o nome do texto ao campo que irá receber os valores
                style={Padrao.input} // Determina o estilo do campo de input
                onChangeText={this.alterartexto1}
                />
                <Text style={Padrao.input}>{this.state.campo1}</Text>
                
                <TextInput value={this.state.campo2} // da o nome do texto ao campo que irá receber os valores
                style={Padrao.input} // Determina o estilo do campo de input
                onChangeText={this.alterartexto2}
                />
                <Text style={Padrao.input}>{this.state.campo2}</Text>
            </View>
        )
    }
}