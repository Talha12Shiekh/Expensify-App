import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { colors } from '../Theme';

const BackButton = () : React.JSX.Element => {
  return (
    <TouchableOpacity>
      <ChevronLeftIcon 
      size="30"
      color={colors.button}
      />
    </TouchableOpacity>
  )
}

export default BackButton
