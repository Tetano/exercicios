import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
    const Validarprops = props =>
    <Text style = {{fontSize: 30}}>
        {props.label}
        {props.ano+2000}
    </Text>
    Validarprops.defaultProps = {
        label : 'Ano: '
    }
    Validarprops.PropTypes = {
        ano: PropTypes.number.isRequired
    }
    export default Validarprops