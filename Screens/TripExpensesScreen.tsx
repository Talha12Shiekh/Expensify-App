import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import { colors } from "../Theme";
import randomImage from "../assets/images/randomImage";
import EmptyListComponent from "../Components/EmptyListComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/AppNavigation";
import BackButton from "../Components/BackButton";
import ExpenseCard from "../Components/ExpenseCard";
import { useIsFocused } from "@react-navigation/native";
import { expensesRef } from "../Config/firebase";
import { getDocs, query, where } from "firebase/firestore";


 

type TripsExpenseScreenProps = NativeStackScreenProps<RootStackParamsList, "TripsExpense">;

interface ExpensesDataType {
  title: string,
  amount: string,
  category: string,
  id: string
}



const TripExpensesScreen: React.FC<TripsExpenseScreenProps> = ({ navigation, route }): React.JSX.Element => {
  const { place, country, id } = route.params;

  const [expenses, setexpenses] = useState<ExpensesDataType[]>([]);
  const focused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expensesRef, where("tripId", "==", id));
    const querySnapshot = await getDocs(q);
    let data: ExpensesDataType[] = [];
    querySnapshot.forEach(qry => {
      const expnenses = qry.data() as Omit<ExpensesDataType,"id">;
      data.push({ ...expnenses, id: qry.id });
    });
    setexpenses(data);
  }

  useEffect(() => {
    if(focused)
      fetchExpenses();
  },[focused])

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
            <TouchableOpacity onPress={() => navigation.navigate("AddExpense", { id, place, country })} className="bg-white p-2 px-4 border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              contentContainerStyle={{ paddingBottom: 25 }}
              data={expenses}
              ListEmptyComponent={<EmptyListComponent message={"You have not added any expenses yet !"} />}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}

              renderItem={({ item }) => {
                return <ExpenseCard item={item} />
              }}
            />
          </View>

        </View>
      </View>

    </ScreenWrapper>
  )
}

export default TripExpensesScreen;