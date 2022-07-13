import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#543f3e',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24, 
        height: 24,
        backgroundColor: '#7d6968',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        marginTop: 30,
        color: '#fff',
        fontSize: 16
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#7d6968',
        borderWidth: 2,
        borderRadius: 5,
    },
});


export default Task;