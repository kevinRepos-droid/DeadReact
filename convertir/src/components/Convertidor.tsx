import React from 'react'
import {View, Text, TextInput,StyleSheet,Button} from 'react-native'

export const Convertidor = () => {
    return (
         <View>
        <Text style={styles.texto}> Origen</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.texto}> Destino</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.texto}> Convertir</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.texto}> Resultado</Text>
        <TextInput style={styles.input}/>
      
        <View style={styles.button}>
        <Button 
            title="calcular"
            onPress={()=> alert('hola')}
            />
            </View>
          </View>
    )
}
const styles = StyleSheet.create({
    button:{
        marginTop: 10,
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal:80,
        paddingVertical:5,
        borderColor: 'green',
        backgroundColor:'gray'
    },
    texto:{
        textAlign: 'center'
    }
        
})

    


