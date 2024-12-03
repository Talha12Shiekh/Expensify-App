import { View, Text } from 'react-native'
import React from 'react';
import { CategoryBG, colors } from '../Theme';

interface ItemProps {
    id: number,
    title: string,
    category: string,
    amount:number
}

const ExpenseCard = ({item}:ItemProps) : React.JSX.Element => {
  return (
    <View style={{backgroundColor:CategoryBG[item.category]}} className='flex-row justify-between items-center p-4 bg-red-300 mb-4 rounded-2xl'>
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>{item.amount}</Text>
      </View>
    </View>
  )
}

export default ExpenseCard