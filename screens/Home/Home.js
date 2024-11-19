import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";


const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={"Azzahri A."} type={1} />
            {/* <View style={{ width: horizontalScale(130) }}> */}
            <Tab title={"Highlight"} />
            <Tab title={"Highlight"} isInactive={true} />
            {/*</View> */}
        </SafeAreaView>
    );
};

export default Home;