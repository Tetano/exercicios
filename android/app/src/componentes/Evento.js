import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component{
    state = {
        texto:''
    }

    alterarTexto = texto =>{
        this.setState({texto})
    }
    render(){
        return(
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} // da o nome do texto ao campo que irá receber os valores
                style={Padrao.input} // Determina o estilo do campo de input
                onChangeText={this.alterarTexto} // Efetua a chamada da função que muda o texto
                />

            </View>
        )
    }
}