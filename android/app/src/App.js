import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Simples from './componentes/Simples'
import Padrao from './estilo/Padrao'
import Parimpar from '../src/componentes/Parimpar'
import Funcoes from './componentes/Funcoes'
import {Inverter,Megasena} from './componentes/Multi'
export default class App extends React.Component{ // Extendendo de componente a class herda os metodos e atributos de component.
  render() {//Aqui dentro serão renderizados os componentes.
    return (
      <View style = {styles.container}>
      
                   <Funcoes nu1 ={20} nu2={22} nu3 = {30}/>
                   <Inverter texto='vinicius'/>
                   <Inverter texto='amanda'/>
                   <Inverter texto='miguel'/>  
                   <Megasena numeros = {6}/>     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  f20:{
    justifyContent:'center',
    fontSize:20
  },
  f30:{
    justifyContent:'center',
    fontSize:30
  }
})