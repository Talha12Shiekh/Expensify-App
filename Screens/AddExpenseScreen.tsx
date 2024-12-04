import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import { CATEGORIES } from '../Constants'

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
    <ScreenWrapper>
      <View className='flex justify-between h-full'>
        <View >
          <View className='relative mx-4'>
            <View className='absolute top-0 left-0'>
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-3xl font-bold text-center`}>Add Expense</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-9'>
            <Image
              source={require("../assets/images/expenseBanner.png")}
              className='h-72 w-72'
            />
          </View>
          <View className='gap-5 mx-4'>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>For What?</Text>
            <TextInput
            className='p-4 bg-white text-black rounded-full mb-3'
            value={title}
            onChangeText={v => settitle(v)}
            />
            </View>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>How Much?</Text>
            <TextInput
            value={amount}
            onChangeText={c => setamount(c)}
            className='p-4 bg-white text-black rounded-full mb-3'
            />
            </View>
          </View>
          <View className='mx-4'>
            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Category</Text>
            <View className='flex-row flex-wrap items-center gap-1 gap-y-3'>
              {
                CATEGORIES.map(cate => {
                    const bgcolor = cate.value === category ? "bg-green-200" : "bg-white";
                    return <TouchableOpacity onPress={() => setcategory(cate.value)} key={cate.value} className={`rounded-full bg-white p-2 px-6 mr-2 ${bgcolor}`}>
                      
                      <Text className='text-lg'>{cate.title}</Text>
                    </TouchableOpacity>
                })
              }
            </View>
          </View>
        </View>
        <View>
            <TouchableOpacity onPress={handleAddExpense} className='my-6 rounded-full p-4 mx-4 bg-green-600'>
              <Text className='text-center text-white text-xl font-bold'>Add Expense</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default AddExpensesScreen