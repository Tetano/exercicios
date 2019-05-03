import React,{Component} from 'react'
import {View, Text, Button, ToastAndroid} from 'react-native'

export default class Validar extends Component{

    state = {
        alerta: false,
        temperatura: 0,
        umidade: 0,
        dica : ''
    }
   eventotemperatura = (temp) =>{ // Vai ser uma tela renderizada para lhe afirmar que uma das propriedades atribuidas não está desejável
    if(temp<=32){ // Usei como exemplo de uma estufa, caso a temperatura esteja baixa é algo ruim
        this.setState({alerta: this.state.alerta = true}) // Está colocando a flag alerta como verdadeira
        this.setState({dica: this.state.dica = 'Temperatura Indesejável'}) // Está setando uma frase que poderá ser retornada
        ToastAndroid.show(this.state.dica ,ToastAndroid.LONG)
    } 
    else{
        ToastAndroid.show('Temperatura Normal' ,ToastAndroid.LONG)
    }
}
    eventoumidade = (umid) =>{
        if(umid<=50){
            this.setState({alerta: this.state.alerta = true})
            this.setState({dica: this.state.dica = 'Umidade Indesejável'})
            ToastAndroid.show(this.state.dica ,ToastAndroid.LONG)
   }    
        else{
            ToastAndroid.show('Umidade Normal' ,ToastAndroid.LONG)
        }
}
    render(){
        return(
            <View>
         <Button
            onPress={this.eventotemperatura}
            title="Verificar Temperatura"
            color="#F7D021"
            />
        < Button
            onPress={this.eventoumidade}
            title="Verificar Umidade"
            color="#00BFFF"
            />
            </View>
        )

    }
}