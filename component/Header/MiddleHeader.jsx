import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';


const MiddleHeader = () => {
    return (
        <View style={styles.header__Box}>
            <Text style={styles.boxText_1}>Upto 50%</Text>
            <View style={styles.textFlex}>
                <View>
                    <Text style={styles.text_Styles}>Look more beautiful and <br />Save more discount </Text>
                    <Text style={styles.offerStyle}>Get Offer now!</Text>
                </View>
                <Text style={styles.imgs}>
                    <Image style={styles.imgss} source={require("../../assets/hd.png")} />
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header__Box: {
        width: '95vw',
        minHeight: '220px',
        backgroundColor: "#fff",
        margin: "auto",
        borderRadius: '10px',

    },
    boxText_1: {
        color: "orange",
        padding: '10px',
        marginTop: '2px',
        fontSize:"17px",
        fontWeight: '600',
    },
    textFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
        position: 'relative',
    },
    text_Styles: {
        color: "#2C685A",
        fontSize: '17px',
        fontWeight: '700',
        lineHeight:'25px',
    },
    imgs: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: "orange",
        position: 'relative',
        padding: '10px',
    },
    imgss: {
        width: '120px',
        height: '120px',
        marginTop: '20px',
        top: 20,
        left: 1,
        borderBottomLeftRadius: '4px',
        position: "absolute",
    },
    offerStyle: {
        width: '70%',
        marginTop: '20px',
        lineHeight: '12px',
        color: "orange",
        fontWeight: '600',
        border: '1px solid #808080',
        padding: '6px',
        borderRadius: '10px',
    }
})

export default MiddleHeader;
