import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import PoweredBy from './PoweredBy';
import VolumeControl from './VolumeControl';
import RNNativeSoundToast from 'react-native-sound-toast';

const data = [
    {id: 'Cat', file: 'cat', type: 'wav'},
    {id: 'Dog', file: 'dog', type: 'wav'},
    {id: 'Cow', file: 'cow', type: 'wav'},
    {id: 'Lion', file: 'lion', type: 'wav'},
    {id: 'Pig', file: 'pig', type: 'wav'},
    {id: 'Bird', file: 'bird', type: 'wav'}
  ];
const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;

const Sound = () => {

    const playSound = (file, type) => {
        console.log("playSound : "+file);
        RNNativeSoundToast.playSound(file, type);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sound</Text>
            </View>
            <VolumeControl></VolumeControl>
            <Text style={styles.voicePlayTitle}>Click the tiles to enjoy the sound of nature</Text>
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => playSound(item.file, item.type)}>
                            <View style={styles.item}>
                                <Text style={styles.itemText}>{item.id}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}/>
            </View>
            <PoweredBy></PoweredBy>
        </View>
    )
}

export default Sound;

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
    voicePlayTitle: {
        marginTop: 10,
        fontSize: 16,
        padding: 10
    },
    content: {
        flex: 1,
        marginTop: 10
    },
    itemContainer: {
        width: size,
        height: size
    },
    item: {
        flex: 1,
        margin: 3,
        backgroundColor: 'wheat',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 20
    }
});
