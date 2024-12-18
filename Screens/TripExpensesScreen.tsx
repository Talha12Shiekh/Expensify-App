import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import { colors } from "../Theme";
import randomImage from "../assets/images/randomImage";
import EmptyListComponent from "../Components/EmptyListComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/AppNavigation";
import BackButton from "../Components/BackButton";
import ExpenseCard from "../Components/ExpenseCard";


const items = [
  {
    id: 1,
    title: "ate sandwhich",
    category: "food",
    amount:4
  },
  {
    id: 2,
    title: "bought a jacket",
    category: "shopping",
    amount:100
  },
  {
    id: 3,
    title: "watched a movie",
    category: "entertainment",
    amount:50
  },
]

type TripsExpenseScreenProps = NativeStackScreenProps<RootStackParamsList, "TripsExpense">;


const TripExpensesScreen: React.FC<TripsExpenseScreenProps> = ({ navigation,route }): React.JSX.Element => {
  const {  place , country } = route.params;
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">

        <View className='relative mx-4'>
          <View className='absolute top-2 left-0'>
            <BackButton />
          </View>
          <Text className={`${colors.heading} text-3xl font-bold text-center`}>{place}</Text>
          <Text className={`${colors.heading} font-bold text-center text-xs`}>{country}</Text>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/7.png")}
            className="w-80 h-80"
          />
        </View>
        <View>
          <View className="flex-row justify-between items-center mb-3">
            <Text className={`${colors.heading} font-bold text-xl`}>Expenses</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddExpense")} className="bg-white p-2 px-4 border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              contentContainerStyle={{ paddingBottom: 25 }}
              data={items}
              ListEmptyComponent={<EmptyListComponent message={"You have not added any expenses yet !"} />}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}

              renderItem={({ item }) => {
                return <ExpenseCard item={item}/>
              }}
            />
          </View>

        </View>
      </View>

    </ScreenWrapper>
  )
}

export default TripExpensesScreen;