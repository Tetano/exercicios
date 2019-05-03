import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import Padrao from '../estilo/Padrao';
//Criando primeiro componente baseado em função

//export default props => {
//return[
 //   <Text key={1}>Linha1:{props.texto}</Text>,
 //   <Text key={2}>Linha2:{props.texto}</Text>]


//}

export default props =>
 <Text style={[Padrao.ex]}>Arrow 1: {props.texto}</Text>
//export default props => {
  //  <View>
    //    <Text>Linha1:{props.texto}</Text>,
     //   <Text>Linha2:{props.texto}</Text>
    //</View>
    
   // }

   