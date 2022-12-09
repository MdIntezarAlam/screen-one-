import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeService, HomeStaff, HomeLocation } from './';

const Home = () => {
    return (
        <View style={styles.home_}>
            <View style={styles.home_box}>
                <View style={styles.home_heading}>
                    <Text style={styles.serviceStyle}>Services</Text>
                    <Text style={styles.btnStyle}>Show All</Text>
                </View>
                <HomeService />
                <HomeStaff />
                <HomeLocation />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home_: {
        width: "100vw",
        height: '100vh',
        backgroundColor: "#fff",
        display: 'inline-block',
    },
    home_box: {
        width: '95vw',
        minHeight: '210px',
        backgroundColor: "#fff",
        borderRadius: '5px',
        margin: 'auto',
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
})

export default Home;
