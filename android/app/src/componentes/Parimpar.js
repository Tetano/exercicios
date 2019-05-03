import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'
function ParImpar(num){
    if(num%2 == 0){
        return<Text style={Padrao.ex}>Par</Text> // Função deve sempre retornar algo
}
    else{
        return <Text style={Padrao.ex}>Impar</Text> // Função deve sempre retornar algo
    }

}
function ParImpar2(num){
    const v = num %2 ==0? 'Par': 'Impar'
    return <Text style= {Padrao.ex}>{v}</Text>
}

export default props =>

    //<View>
        //{
            
            //ParImpar2(props.numero)
          
            
        //    props.numero % 2 == 0
       //     ? <Text style={Padrao.ex}>Par</Text> // ? == Verdadeiro
       //     : <Text style={Padrao.ex}>Impar</Text> // : == Falso
      //  }
    //</View>

    <View>
        <If test={props.numero %2 ==0}>
            <Text style={Padrao.ex}>Par</Text>
        </If> 

        <If test={props.numero %2 ==1}>
        <Text style={Padrao.ex}>Impar</Text>
        </If> 
    </View>
