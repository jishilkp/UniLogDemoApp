import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import RNNativeSoundToast from 'react-native-sound-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const VolumeControl = () => {
    const adjustVolume = (key) => {
        console.log("adjustVolume");
        switch(key) {
            case '+':
                RNNativeSoundToast.increaseSound();
                break;
            case '-':
                RNNativeSoundToast.decreaseSound();
                break;
            case '0':
                RNNativeSoundToast.muteSound();
                break;
            case '1':
                RNNativeSoundToast.unMuteSound();
                break;
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => adjustVolume('+')}>
                <Icon name="plus" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => adjustVolume('-')}>
                <Icon name="minus" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => adjustVolume('0')}>
                <Icon name="volume-mute" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => adjustVolume('1')}>
                <Octicons name="unmute" size={20}/>
            </TouchableOpacity>
        </View>
    )
}

export default VolumeControl;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    button: {
        padding : 10,
        marginHorizontal: 20,
        fontSize: 30
    }
})
