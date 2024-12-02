import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import { colors } from '../Theme'
import BackButton from './BackButton'

const AddTripsScreen = () : React.JSX.Element => {
  return (
    <ScreenWrapper>
      <View>
        <View>
          <BackButton/>
          <Text className={`${colors.heading} text-3xl font-bold text-center`}>Add Trip</Text>
        </View>
        <View></View>
      </View>
    </ScreenWrapper>
  )
}

export default AddTripsScreen