import React from 'react'
import { createDrawerNavigator, StatusBar } from 'react-navigation'
import Simples from './componentes/Simples'
import Padrao from './estilo/Padrao'
import Parimpar from '../src/componentes/Parimpar'
import Funcoes from './componentes/Funcoes'
import {Inverter,Megasena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Lampada from './componentes/Lampada'
import Plataforma from './componentes/Plataforma';
import Bottao from './componentes/Plataforma';
import Validarprops from './componentes/Validarprops'
import Evento from './componentes/Evento'
import Validar from './componentes/Validar'
import Calcular from './componentes/Calcular'
import Avo from './componentes/Comunicacaodireta'
import Brinks from './componentes/Brinks'
import {Comunicacaoindireta, TextoSincronizado} from './componentes/Comunicacaoindireta'
var num = 3
var booleana = false

export default createDrawerNavigator({
    Comunicacaoindireta:{
        screen: TextoSincronizado,
        navigationOptions: { tittle: 'Texto Sincronizado'}
    },
    Brinks: {
        screen: () => <Brinks></Brinks>
    },
    Avo: {
        screen: () => <Avo nome="João" sobrenome="Silva"></Avo>
    },

    Calcular:{
        screen: () => <Calcular></Calcular>
    },
    Validar:{
        screen: () => <Validar temperatura= {20}/>
    },
    Evento:{
    screen: () =>  <Evento texto = {<Evento></Evento>}/>
    },
    Validarprops:{
        screen: () => <Validarprops ano = {20}/>
    },
    Bottao:{
        screen: () => <Bottao/>
    },
    Plataforma:{
        screen: () => <Plataforma/>
    },
    Lampada:{
        screen: () => <Lampada numero={booleana}/>
    },
    Contador: {
        screen: () => <Contador numero={num}/>
    },
    Megasena: {
        screen: () => <Megasena numeros={num*3-1}/>,
        navigationOptions: { tittle: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto = 'React Native'/>,
  
    },
    Parimpar: {
        screen: () => <Parimpar numero = {30}/>,
        navigationOptions: { tittle: 'Par & Impar'}
    },

    Simples: {
        screen: () => <Simples texto = 'Fléxivel!!'/>
    }

},{drawerWidth: 300 })