import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Padrao from '../estilo/Padrao'
function VerificaMaiorMenor(v1,v2){
if(v1>v2){
  return<Text style={Padrao.ex}>A primeira variável é maior</Text>
}
else{
    return<Text style={Padrao.ex}>A Segunda variável é maior</Text>
}
}
function MaiorAbsoluto(v1,v2,v3){
    if(v1>v2&&v1>v3)// Terminar de checar dps
    {
        return<Text style={Padrao.ex}>{v1} é o maior</Text>
    }
    else{
        return<Text style={Padrao.ex}>{v1} não é o meaior</Text>
    }
}
export default props =>

    <View>
        {
  MaiorAbsoluto(props.nu1,props.nu2,props.nu3)
        }
    </View>
