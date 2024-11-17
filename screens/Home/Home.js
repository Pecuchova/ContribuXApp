import React from "react";
import { SafeAreaView } from "react-native";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";


const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={"Azzahri A."} type={1} />
            <Button
                title={'Donate'}
                onPress={() => {
                    console.log('pressed button');
                }}
            />
            <Button title={'Donate'} isDisabled={true} />
        </SafeAreaView>
    );
};

export default Home;