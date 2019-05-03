import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import {Inverter,Megasena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Lampada from './componentes/Lampada'
import Plataforma from './componentes/Plataforma';
import Validar from './componentes/Validar'
var num = 3
var booleana = false
export default createDrawerNavigator({
    Validar:{
        screen: () => <Validar temperatura= {20}/>
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


},{drawerWidth: 300 })