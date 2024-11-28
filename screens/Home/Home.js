import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    Pressable,
    FlatList,
} from 'react-native';

// Importing the useSelector and useDispatch hooks from the React Redux library
// The useSelector hook allows us to select and retrieve data from the store
// The useDispatch hook allows us to dispatch actions to update the store
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/Search/Search";
import Item from "../../components/Item/Item";

import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const Home = () => {
    const user = useSelector(state => state.user);
    console.log(user);

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories);


    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}>Hello, </Text>
                        <View style={style.username}>
                            <Header
                                title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
                            />
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/profile_image.png')}
                        style={style.profileImage}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={style.searchBox}>
                    <Search />
                </View>
                <Pressable style={style.highlightedImageContainer}>
                    <Image
                        style={style.highlightedImage}
                        source={require('../../assets/images/highlighted_image.png')}
                        resizeMode={'contain'}
                    />
                </Pressable>
                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>
                <View style={style.categories}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
                        renderItem={({ item }) => (
                            <View style={style.categoryItem} key={item.categoryId}>
                                <Tab
                                    tabId={item.categoryId}
                                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;