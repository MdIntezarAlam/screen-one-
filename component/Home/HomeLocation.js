import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeLocation = () => {
    return (
        <View style={styles.location}>
            <View style={styles.location_heading}>
                <Text style={styles.location_heading_Style}>Our Location</Text>
                <Text style={styles.location_btn_Style}>Show All</Text>
            </View>
            <View style={styles.location_box}>
                <View style={styles.location_one}>
                    <Text style={styles.textStyle} style={{ color: "#fff", marginTop:'15%' }}>FM</Text>
                </View>
                <View style={styles.location_two}>
                    <Text style={styles.textStyle} style={{ color: "#000" }}>Westheimer/ <br />Galleria</Text>
                </View>
                <View style={styles.location_two}>
                    <Text style={styles.textStyle}>Westheimer/ <br />Wilcrest</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    location: {
        marginTop: '20px',
    },
    location_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '10px',
    },
    location_heading_Style: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    location_btn_Style: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    // Box
    location_box: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    location_one: {
        width: '102px',
        height: '50px',
        backgroundColor: "#175C4C",
        borderTopRightRadius: '14px',
        borderTopLeftRadius: '14px',
        alignItems: 'center',
        textAlign: 'center'
    },
    location_two: {
        width: '102px',
        height: '45px',
        borderTopRightRadius: '14px',
        borderTopLeftRadius: '14px',
        background: '#FFFFFF',
        boxRhadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    },
    textStyle: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '2%',
        alignItems: 'center',

    }
})

export default HomeLocation;
