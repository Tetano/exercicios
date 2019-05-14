import React, {Component} from 'react'
import {View,Text,Button, StatusBar} from 'react-native'

export  class Lampada extends Component{
    state= {
        temperatura: null,
        umidade : null
    }

    render(){
        return(
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/> 

            </View>
        )
    }
}


/*
export default class minhaclasse extends Componente{}
export default class minhaclasse extends Componente{}
export default class minhaclasse extends Componente{}
export default class minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{} 
export default class Minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{}
export default class Minhaclasse extends Componente{}
function nomedafunção (parametros){}
function nomedafunção (parametros){}
function nomedafuncao (parametros){}
export default class Minhaclasse extends Componente{}
export default props = () =>
*/