import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const File = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>File</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.message}>Coming soon</Text>
            </View>
        </View>
    )
}

export default File;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 20
    },
    headerText: {
        fontSize: 40
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontSize: 22
    }
});
