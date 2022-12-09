import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HeaderTop = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.text1Style}>9:41</Text>
            <Text style={styles.text2Style}>2</Text>
            <Text style={styles.textThreeStyle}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        width: '95vw',
        height: '20px',
        padding: '20px',
        margin: 'auto',
        flex: 1,
        flexDirection: 'row',
        padding:'5px',
    },
    text1Style: {
        position: 'absolute',
        width: '28.43px',
        height: '11.09px',
        left: '12.45px',
        top: '5.17px',
        color: "#fff",
        textAlign: 'center',
    },

    text2Style: {
        position: 'absolute',
        width: '230.06px',
        height: '233.64px',
        left: ' 50.25px',
        top: '-152.08px',
        opacity: '0.5',
        border: '1px solid #C0E1BF',
        backgroundColor: "green",
        borderRadius: '50%'
    },
     textThreeStyle: {
        position: 'absolute',
        width: '3px',
        height: '8.33px',
        top: ' 22px',
        background: ' #DADADA',
    }
})

export default HeaderTop;
