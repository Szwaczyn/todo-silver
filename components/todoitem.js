import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem( {position, setAsCompleted} ) {
    console.log(position.Text);
    return (
        <TouchableOpacity onPress={() => setAsCompleted(position.key)}>
            <Text style={styles.item}>{position.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'green',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        color: 'black'
    },
})