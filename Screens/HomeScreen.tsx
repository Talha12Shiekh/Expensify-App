import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import { colors } from "../Theme";
import randomImage from "../assets/images/randomImage";
import EmptyListComponent from "../Components/EmptyListComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/AppNavigation";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";


const items = [
    {
        id: 1,
        place: "Gujrat",
        country: "Pakistan"
    },
    {
        id: 2,
        place: "London eye",
        country: "England"
    },
    {
        id: 3,
        place: "Washington dc",
        country: "America"
    },
    {
        id: 4,
        place: "New York",
        country: "America"
    },
    {
        id: 5,
        place: "New York",
        country: "America"
    },
    {
        id: 6,
        place: "New York",
        country: "America"
    },
    {
        id: 7,
        place: "New York",
        country: "America"
    },
]

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList , "Home">;


const HomeScreen: React.FC<HomeScreenProps> = ({navigation}): React.JSX.Element => {

    const handleLogout = async () => {
        await signOut(auth);
    }

    return (
        <ScreenWrapper className="flex-1">
            <View className="flex-row justify-between items-center p-4">
                <Text className={`text-4xl ${colors.heading} font-bold`}>Expensify</Text>
                <TouchableOpacity onPress={handleLogout} className="bg-white p-2 px-4 border border-gray-200 rounded-full">
                    <Text className={colors.heading}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
                <Image
                    source={require("../assets/images/banner.png")}
                    className="w-80 h-80"
                />
            </View>
            <View className="px-4">
                <View className="flex-row justify-between items-center mb-3">
                    <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("AddTrip")} className="bg-white p-2 px-4 border border-gray-200 rounded-full">
                        <Text>Add Trip</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:430}}>
                    <FlatList
                        contentContainerStyle={{paddingBottom:25}}
                        data={items}
                        ListEmptyComponent={<EmptyListComponent message={"You have not added any trips yet !"}/>}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{justifyContent:"space-between"}}
                        
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("TripsExpense",{...item})} className="bg-white py-3 mb-2 rounded-2xl px-9">
                                    <View>
                                        <Image
                                        source={randomImage()}
                                        className="w-36 h-36 mb-3"
                                        />
                                        <Text className={`${colors.heading} font-bold text-md`}>{item.place}</Text>
                                        <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default HomeScreen;