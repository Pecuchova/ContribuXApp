import React from "react";
import { Image, View } from "react-native";

import Badge from "../Badge/Badge";
import Header from "../Header/Header";

import style from "./style";
import PropTypes from "prop-types";

const Item = props => {
    return (
        <View>
            <View>
                <View style={style.badge}>
                    <Badge title={props.badgeTitle} />
                </View>
                <Image
                    resizeMode={"contain"}
                    source={{ uri: props.uri }}
                    style={style.image}
                />
            </View>
            <View style={style.itemInformation}>
                <Header title={props.donationTitle} type={3} color={"#0A043C"} />
                <View style={style.price}>
                    <Header
                        title={"$" + props.price.toFixed(2)}
                        type={3}
                        color={"#156CF7"}
                    />
                </View>
            </View>
        </View>
    );
};

Item.propTypes = {
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Item;