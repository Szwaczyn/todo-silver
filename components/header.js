import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo - Silver</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:38,
        backgroundColor: '#006300',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        color: 'white',
    },
})