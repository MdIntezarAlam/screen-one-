import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { homeBox_two } from '../../utils/HomeData'

const HomeStaff = () => {
    return (
        <View style={styles.staff_container}>
            <View style={styles.staff_heading}>
                <Text style={styles.staff_heading_Style}>Our Staff</Text>
                <Text style={styles.staf_btn_Style}>Show All</Text>
            </View>
            <View style={styles.staff__box}>
                {homeBox_two.map((data) => (
                    <View style={styles.staff_box}>
                        <Image source={data.src} style={styles.staff_box_img} />
                        <Text>{data.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    staff_container: {
        height: '50px',
        width: '100%',
        flex: 1,
    },
    staff_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '10px',
    },
    staff_heading_Style: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    staf_btn_Style: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    staff__box: {
        padding: '20px',
        flexDirection: "row",
        justifyContent: 'center-between',
        alignItems: 'center',
    },
    staff_box: {
        width: '106px',
        height: '115px',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: '10px',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        padding: '10px',
    },
    staff_box_img: {
        width: ' 62px',
        height: ' 62px',
        borderRadius: '10px',
        border: '1px solid gray',
        padding: '10px',
        borderRightColor: '10%',
    }
})

export default HomeStaff;
