import { View, Text } from 'react-native'
import React from 'react';
import { CategoryBG, colors } from '../Theme';

interface ItemProps {
    id: string,
    title: string,
    category: string,
    amount:string
}

export type CategoryKeys = 'food' | 'commute' | 'entertainment' | 'shopping' | 'other';

interface ExpenseCardProps {
  item:ItemProps
}

const ExpenseCard  = ({item}:ExpenseCardProps) : React.JSX.Element => {
  return (
    <View style={{backgroundColor:CategoryBG[item.category as CategoryKeys]}} className='flex-row justify-between items-center p-4 bg-red-300 mb-4 rounded-2xl'>
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