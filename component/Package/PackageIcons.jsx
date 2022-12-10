import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const PackageIcons = () => {
    return (
        <View style={styles.p_icons}>
            <View style={styles.p_flex}>
                <View style={styles.p_Imgs}>
                    <Image source={require("../../assets/p_1.jpg")} style={styles.p_img} />
                </View>
                <Image source={require("../../assets/p_2.jpg")} style={styles.p__img} />
                <Image source={require("../../assets/p_3.jpg")} style={styles.p__img} />
                <Image source={require("../../assets/p_4.png")} style={styles.p__img} />
                <Image source={require("../../assets/p_5.jpg")} style={styles.p__img} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    p_icons: {
        width: '100vw',
        backgroundColor: "#fff",
        boxShadow: ' rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    },
    p_flex: {
        width: '95vw',
        padding: '5px',
        margin: 'auto',
        backgroundColor: "#ff",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    p_Imgs: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: "#FDEFD9",
        alignContent: 'center',
        justifyContent: 'center',
    },
    p_img: {
        width: '30px',
        height: '30px',
        color: "orange",
        borderRadius: '50%',
        left: '15px',
        position: 'absolute'
    },
    p__img: {
        width: '28px',
        height: '35px',
        color: "#000",
        fontWeight:'bold'
    }

})

export default PackageIcons;
