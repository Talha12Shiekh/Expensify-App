import { View, Text, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'

const WelcomeScreen : React.FC = () : React.JSX.Element => {
  return (
    <ScreenWrapper>
      <View>
        <View>
            <Image
            source={require("../assets/images/welcome.gif")}
            className='w-96 h-96'
            />
            <Text>hello world</Text>
        </View>
        <View></View>
      </View>
    </ScreenWrapper>
  )
}

export default WelcomeScreen