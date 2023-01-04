import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import CharacterPNG from '../src/character.png'
import CharacterSVG from '../src/character.svg'


const ImageComp = () => {
  return (
    <View>
      <Image source={CharacterPNG} />
      <Image source={require('../src/character.png')} style={{ width: 100, height: 100 }} />

      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={{ width: 100, height: 100, resizeMode: 'contain' }} />

      <ImageBackground source={CharacterPNG}
        style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Inside</Text>
      </ImageBackground>

    </View>
  )
}

export default ImageComp

const styles = StyleSheet.create({

})