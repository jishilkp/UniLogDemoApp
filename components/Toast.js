import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import RNNativeSoundToast from 'react-native-sound-toast';
import PoweredBy from './PoweredBy';

const Toast = () => {

    const showToast = (position) => {
        console.log("showToast");
        switch(position) {
            case 'TOP':
                RNNativeSoundToast.showToastAtTop("Hello World");
                break;
            case 'CENTER':
                RNNativeSoundToast.showToastAtCenter("Hello World");
                break;
            default:
                RNNativeSoundToast.showToast("Hello World");
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Toast</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => showToast('TOP')}>
                    <Text style={styles.buttonText}>Show Toast at Top</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showToast('CENTER')}>
                    <Text style={styles.buttonText}>Show Toast at Center</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showToast('BOTTOM')}>
                    <Text style={styles.buttonText}>Show Toast at Bottom</Text>
                </TouchableOpacity>
            </View>
            <PoweredBy></PoweredBy>
        </View>
    )
}

export default Toast;

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
        padding: 10,
        justifyContent: 'center'
    },
    toastButton: {
        marginBottom: 20,
        padding: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18
    }
});
