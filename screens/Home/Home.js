import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import Item from "../../components/Item/Item";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";





const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={"Azzahri A."} type={1} />
            <Search onSearch={(value) => { console.log(value); }} />
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: horizontalScale(24),
            }}>
                <Item uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKX2yD4EofsE0MyHvfDG13uUCrWPzQv0IzP_TTb324s69kagKBJc9VsmmYe_1ZNL-JRM&usqp=CAU"} badgeTitle={"Education"} donationTitle={"Genius Rubik"} price={50} />
                <Item uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKX2yD4EofsE0MyHvfDG13uUCrWPzQv0IzP_TTb324s69kagKBJc9VsmmYe_1ZNL-JRM&usqp=CAU"} badgeTitle={"Education"} donationTitle={"Genius Rubik"} price={50} />
            </View>
        </SafeAreaView>
    );
};

export default Home;