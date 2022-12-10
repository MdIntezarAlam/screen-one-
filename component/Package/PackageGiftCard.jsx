import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { packageGiftCard } from '../../utils/HomeData';

const PackageGiftCard = ({ card, btn }) => {
    return (
        <View style={styles.card_container}>
            <View style={styles.card_heading}>
                <Text style={styles.cardStyle}>{card}</Text>
                <Text style={styles.card_btnStyle}>{btn}</Text>
            </View>
            <View style={styles.card_box}>
                {packageGiftCard.map((data) => (
                    <View style={styles.card__box}>
                        <Image source={data.src} style={styles.card_img} />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        width: '100vw',
        height: '28vh',
        backgroundColor: '#FBFCFE',
    },
    card_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '20px',
    },
    cardStyle: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    card_btnStyle: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    // card_box
    card_box: {
        width: '100vw',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    card__box: {
        margin: '5px',
        padding: '5px',
        borderRadius: '10px',
    },
    card_img: {
        width: '115px',
        height: '70px',
        borderRadius: '10px',
    }
})

export default PackageGiftCard;
