import React, {useEffect} from 'react'
import { View, TextInput, Button, StyleSheet, Alert} from 'react-native'

const Contact = ({ navigation }) => {
    // useEffect(() => {
    //   navigation.addListener('beforeRemove', (event) => {
    //     event.preventDefault()
    //     alert('Are you sure?')
    //   })
    // })
    
    const handleSave = () => {
        console.log("Terkirim")
    }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} />
      <TextInput placeholder="Pesan" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" onPress={(handleSave)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

export default Contact