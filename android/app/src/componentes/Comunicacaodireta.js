import React from 'react'
import {View, Text} from 'react-native'

function filhoscomProps(props){
    return React.Children.map(props.children,
        c => React.cloneElement(c,{...props, ...c.props}))
}

const fonte = {style: {fontsize: 30} }

export const Filho = props =>
<View>
    <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
</View>

export const Pai = props =>
<View>
<Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/*props.children*/}
        {filhoscomProps(props)}
</View>

export const Avo = props =>
<View>
<Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
    <Pai nome = 'Andre' sobrenome = {props.sobrenome}>
    <Filho nome = 'Ana'/>
    <Filho nome = 'Davi'/>
    <Filho nome = 'Gui'/>
    </Pai>
    <Pai {...props} nome='Pedro'>
    <Filho nome = 'Rebeca'/>
    <Filho nome = 'Renato'/>
    </Pai>

</View>

export default Avo