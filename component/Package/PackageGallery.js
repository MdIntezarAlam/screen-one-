import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { packageGallery } from '../../utils/HomeData';

const PackageGallery = () => {
    return (
        <View>
            <View style={styles.gallery_heading}>
                <Text style={styles.galleryStyle}>Gallery</Text>
                <Text style={styles.gallerybtnStyle}>Show All</Text>
            </View>
            {packageGallery.map((img) => (
                <View style={styles.p_Box}>
                    <Image source={img.src} style={styles.g_img} />
                    <Image source={img.src} style={styles.g_img} />
                    <Image source={img.src} style={styles.g_img} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    g_container: {

    },
    gallery_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "10px",
        margin: '10px',
    },
    galleryStyle: {
        color: "#102C56",
        fontSize: '19px',
        lineHeight: "14px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    gallerybtnStyle: {
        color: "#F98700",
        fontSize: '17px',
        lineHeight: "18px",
        letterSpacing: '2%',
        fontWeight: 500,
    },
    p_Box: {
        position: 'absolute',
        width: '128px',
        height: '124px',
        left: 0,
        top: 0,
        marginTop: '40px',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        margin: 'auto    '
    },
    g_img: {
        width: '124px',
        height: '124px',
        padding: '20px',
        borderRadius: '20px',

    }
})

export default PackageGallery;
