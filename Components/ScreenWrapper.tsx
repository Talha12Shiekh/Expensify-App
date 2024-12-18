import { StatusBar, View, ViewProps } from "react-native";
import React, { ReactNode } from "react";

interface ScreenWrapperProps extends ViewProps {
    children: ReactNode;
}

const ScreenWrapper = ({ children,...rest }: ScreenWrapperProps): React.JSX.Element => {
    const paddingTop = StatusBar.currentHeight ? StatusBar.currentHeight :0;

    return <View
        style={{ paddingTop }}
        {...rest}
    >{children}</View>
};




export default ScreenWrapper;
