import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

const PoweredBy = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                This feature is powered by an external library
            </Text>
            <Text style={styles.libraryLink}
                onPress={() => Linking.openURL('https://www.npmjs.com/package/react-native-sound-toast')}>
                react-native-sound-toast
            </Text>
            <Text style={styles.copyRight}>
                © Jishil K P
            </Text>
    </View>
    )
}

export default PoweredBy

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCCCCC',
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 14,
        color: 'black'
    },
    libraryLink: {
        color: 'blue',
        fontSize: 16,
    },
    copyRight: {
        fontSize: 12,
        color: 'black'
    }
})
