import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

const App = () => {
    return (
        <View style={styles.app_container}>
            <Header />
            <Home />
        </View>


    );
}

const styles = StyleSheet.create({
    app_container: {
        width: '100vw',
        height:'100vh',
        backgroundColor: "#fff",
    }
})

export default App;
