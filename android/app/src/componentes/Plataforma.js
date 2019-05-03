import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props =>{
    const notificar = msg =>{
        if(Platform.OS === 'android'){ // Pode ser IOS tb
            ToastAndroid.show('Utilizando Android', ToastAndroid.LONG)
        }
        else{
            Alert.alert('Informação','Utilizando Ios')
            }
    }

    return(
        <Button
        onPress={ () => notificar('Parabéns')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    )
        }
    
