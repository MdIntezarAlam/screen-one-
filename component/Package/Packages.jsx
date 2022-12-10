import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { packageData } from '../../utils/HomeData';
import { PackageIcons, PackageGiftCard, PackageContact, PackageGallery } from './';


const Packages = () => {
    return (
        <View>
            <PackageIcons />
            <View style={styles.package_box}>
                <View style={styles.package_heading}>
                    <Text style={styles.packageStyle}>Packages & Offers</Text>
                    <Text style={styles.packageStyle}>Show All</Text>
                </View>
                <View style={styles.package_flex}>
                    {
                        packageData.map((data) => (
                            <ImageBackground source={data.src} style={styles.package_flex_box}>
                                <Text style={styles.preStyles}>{data.heading}</Text>
                                <Text style={styles.smallText}>{data.smallTexts} <br />{data.brSmallText}</Text>
                                <View style={styles.text_flex}>
                                    <Text style={styles.textStyle}>{data.price}</Text>
                                    <Text style={styles.textBtn}>{data.btn}</Text>
                                </View>
                            </ImageBackground>
                        ))
                    }
                </View>
            </View>
            <PackageGiftCard card={"Gift Card"} btn={"Show All"} />
            <PackageContact heading={"Contact Details"} />
            {/* Opening Compoent */}
            <Text style={styles.opeaning}>Opeaning Our</Text>
            <View style={styles.opeaning_Date}>
                <Text style={styles.dayStyle}>Monday - Sunday </Text>
                <Text style={styles.dayStyle}>Monday - Sunday </Text>
            </View>
            <View style={styles.closing_Date}>
                <Text style={styles.dayStyle}>Sunday </Text>
                <Text style={styles.dateStyle}>Closed</Text>
            </View>
            {/* Package Gallery component */}
            <PackageGallery />
        </View>
    );
}

const styles = StyleSheet.create({
    package_box: {
        width: '375px',
        height: '300px',
        left: '0',
        backgroundColor: "#FBFCFE",
    },
    package_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '20px',
    },
    packageStyle: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    packageStyle: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    package_flex: {
        padding: '5px',
        flexDirection: 'row',
    },
    package_flex_box: {
        minWidth: '200px',
        height: "187px",
        backgroundColor: "#E0D7D7",
        justifyContent: 'center',
        margin: '5px',
        padding: '20px',
        borderRadius: '20px'
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
        opacity: 1,
    },
    text_flex: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: '18px',
        color: "#ffffff",
        fontWeight: '700',
        opacity: 0.99,
    },
    textBtn: {
        width: '100px',
        color: "#fff",
        fontSize: '14px',
        backgroundColor: "orange",
        fontWeight: "400",
        padding: '5px',
        borderRadius: '10px',
        textAlign: 'center'
    },


    // opeaning Our Component
    opeaning: {
        padding: '20px',
        color: "##102C56",
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '500',
        letterSpacing: '2%'
    },
    opeaning_Date: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: '10px',
        margin: '10px',
        alignItems: 'center',
        borderBottomColor: '#979797',
        borderBottomWidth: '0.5px',
    },
    closing_Date: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: '10px',
        marginRight: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        alignItems: 'center',
    },
    dayStyle: {
        color: "#175C4C",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: '24px',
        letterSpacing: "2%",
    },
    dateStyle: {
        color: "#102C56",
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: "24px",
        letterSpacing: '2%'
    }
})

export default Packages;
