import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTab, NotificationTab, MessageTab, InboxTab, AvatarTab } from './'

const Tab = createBottomTabNavigator()

const TabNavigators = () => {
    return (
        <View style={styles.navigatorWrapper}>
            <Tab.Navigator>
                <Tab.Screen name='home' component={HomeTab} />
                <Tab.Screen name='notification' component={NotificationTab} />
                <Tab.Screen name='message' component={MessageTab} />
                <Tab.Screen name='inbox' component={InboxTab} />
                <Tab.Screen name='avatar' component={AvatarTab} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    navigatorWrapper: {
        width: '100vw',
        height: '100px',
        backgroundColor: "orange"
    }
})

export default TabNavigators;
