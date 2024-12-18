import { Image, Text , View } from "react-native";
import React from "react";

const EmptyListComponent = ({message} : {message:String}) : React.JSX.Element => {
    return <View className="flex-1 justify-center items-center my-5">
        <Image
            source={require("../assets/images/empty.png")}
            className="w-40 h-40 shadow"
        />
        <Text className="font-bold text-gray-400">{message || "Data not found"}</Text>
    </View>
} 

export default EmptyListComponent;