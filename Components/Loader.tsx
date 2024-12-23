import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Theme'

const Loader: React.FC = () : React.JSX.Element => {
  return (
    <View className='flex-row justify-center py-5'>
      <ActivityIndicator  
      size={"large"}
      color={colors.button}
      />
    </View>
  )
}

export default Loader