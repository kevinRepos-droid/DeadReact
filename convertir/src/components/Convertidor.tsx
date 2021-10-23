import React from 'react'
import {View, Text, TextInput,StyleSheet,Button} from 'react-native'

export const Convertidor = () => {
    return (
         <View>
        <Text style={styles.texto}> Monto_1</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.texto}> Monto_2</Text>
        <TextInput style={styles.input}/>

          
      
        <View style={styles.button}>
        <Button 
            title="Convertir"
            onPress={()=> alert('Convirtiendo')}
            />
            </View>
            <Text style={styles.texto}> Resultado</Text>
        <TextInput style={styles.input}/>
          </View>
    )
}
const styles = StyleSheet.create({
    button:{
        marginTop: 10,
        color:'red'
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal:80,
        paddingVertical:5,
        borderColor: 'red',
        backgroundColor:'white'
    },
    texto:{
        textAlign: 'center'
    }
        
})

    


