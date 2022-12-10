import { Flex } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PackageIcons } from './';

const Packages = () => {
    return (
        <View>
            <PackageIcons />
            <View style={styles.package_box}>
                <View style={styles.home_heading}>
                    <Text style={styles.serviceStyle}>Packages & Offers</Text>
                    <Text style={styles.btnStyle}>Show All</Text>
                </View>
                <View style={styles.package_flex}>
                    <View style={styles.package_flex_box}>
                        <Text style={styles.preStyles}>Premium Package</Text>
                        <Text style={styles.smallText}>Hair Spa + Pedicure & Mainicure+ <br /> Massage + Hair Cut & more...</Text>
                        <Text> guhijk;l</Text>
                        <Text> guhijk;l</Text>
                    </View>
                    <View style={styles.package_flex_box}>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    package_box: {
        width: '375px',
        height: '139px',
        left: '0',
        backgroundColor: "#FBFCFE",
    },
    home_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '10px',
    },
    serviceStyle: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    btnStyle: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },

    //box
    package_flex: {
        width: '100vw',
        padding: '5px',
        flexDirection: 'row',
    },
    package_flex_box: {
        minWidth: '200px',
        height: "187px",
        backgroundColor: "#E0D7D7",
        borderRadius: '10px',
        justifyContent: 'center',
        margin: '5px',
        padding: '20px',
    },
    preStyles: {
        color: "orange",
        fontSize: '18px',
        fontWeight: '800',
        lineHeight: '20px',
        letterSpacing: '2%',
        padding: '5px',
    },
    smallText: {
        color: "#fff",
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '17px',
        letterSpacing: '2%',
        padding: '5px',
    }
})

export default Packages;
