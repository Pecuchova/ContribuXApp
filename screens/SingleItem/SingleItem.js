import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const SingleItem = ({ navigation }) => {
    const donationItemInformation = useSelector(
        state => state.donations.selectedDonationInformation,
    );
    console.log(donationItemInformation);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={() => navigation.goBack()} />
            </ScrollView>
        </SafeAreaView>
    );
};


export default SingleItem;