import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import { CATEGORIES } from '../Constants'
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'

type AddExpensesScreenProps = NativeStackScreenProps<RootStackParamsList,"AddExpense">;

const AddExpensesScreen: React.FC<AddExpensesScreenProps> = ({navigation}): React.JSX.Element => {
  const [title,settitle] = useState<string>("");
  const [amount,setamount] = useState<string>("");
  const [category,setcategory] = useState<string>("");

  function handleAddExpense() : void {
    if(title && amount && category){
      navigation.goBack()
    }else {

    }
  }

  return (
    <InputAndImageReusableScreen
    finputvalue={title}
    setfinputvalue={settitle}
    sinputvalue={amount}
    setsinputvalue={setamount}
    screenName="AddExpense"
    toptext='Add Expense'
    imagesrc={require("../assets/images/expenseBanner.png")}
    btntext='Add Expense'
    finputtext='For What?'
    sinputtext='How Much?'
    onPress={handleAddExpense}
    category={category}
    setcategory={setcategory}
    />
  )
}

export default AddExpensesScreen