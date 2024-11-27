import React from "react";
import { Pressable, SafeAreaView, View, Text } from "react-native";

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

import { useDispatch, useSelector } from "react-redux";
import { updateFirstName } from "../../redux/reducers/User";


const Home = () => {
    const user = useSelector(state => state.user);
    console.log(user);

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={"Azzahri A."} type={1} />
            <Header title={user.firstName + " " + user.lastName} type={2} />
            <Pressable onPress={() => dispatch(updateFirstName({ firstName: "J" }))}>
                <Text>Press me to change firstName! </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Home;