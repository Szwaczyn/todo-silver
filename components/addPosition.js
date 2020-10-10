import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

export default function AddPosition( { submitHandler } ) {

    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...' 
                onChangeText={changeHandler}
             />
             <Button onPress={() => submitHandler(text)} title='Add todo' color='green' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})