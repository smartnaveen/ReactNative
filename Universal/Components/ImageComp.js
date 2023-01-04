import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CharacterPNG from '../src/character.png'
import CharacterSVG from '../src/character.svg'
import VectorPNG from '../src/Vector.png'
import CharacterSVG1 from '../src/character1.svg'


// https://kumar2396jayant.medium.com/how-to-use-svg-in-react-native-e581eca59534
// Please follow for svg images medium link.

const ImageComp = () => {
  return (
    <ScrollView>
      <View>
        <Image source={CharacterPNG} />
        <Image source={require('../src/character.png')} style={{ width: 100, height: 100 }} />

        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }} />

        <ImageBackground source={CharacterPNG}
          style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#000' }}>Inside</Text>
        </ImageBackground>

        <CharacterSVG />
        <CharacterSVG height={200} width={200} />

        <View style={{flexDirection: 'row'}}>
          <Image source={VectorPNG} />
          <CharacterSVG1 />
        </View>


      </View>
    </ScrollView>
  )
}

export default ImageComp

const styles = StyleSheet.create({

})