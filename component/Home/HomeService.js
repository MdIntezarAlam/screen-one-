import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { homeBox_one } from '../../utils/HomeData'

const HomeService = () => {
    return (
        <View style={styles.service_container}>
            {homeBox_one.map((data) => (
                <View style={styles.service_box}>
                    <Text style={{ backgroundColor: 'green', padding: '10px', borderRadius: '10px' }}>
                        <Image source={data.src} style={styles.service_box_img} />
                    </Text>
                    <Text style={styles.service_box_text}>{data.name}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    service_container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-arround',
        padding: '10px',
        marginBottom: '20px'

    },
    service_box: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    service_box_img: {
        width: '38px',
        height: '38px',
        opacity: 0.5,
        backgroundColor: "transparent",
    },
    service_box_text: {
        padding: '10px',
        fontSize: '14px',
        fontWeight: '400',
        color: "#102C56",
        lineHeight: '24px',
    }
})

export default HomeService;
