import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ 
    onSubmitEditing,
    label, 
    value, 
    onChangeText, 
    placeholder, 
    secureTextEntry, 
    placeholderTextColor }) => {
    const { inputStyle, labelStyle } = styles;

        return (
            <View>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                onSubmitEditing={onSubmitEditing}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                underlineColorAndroid='#FAFAFF'
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                />
            </View>
            );
        };

const styles = {
    inputStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 23,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    // containerStyle: {
    //     height: 40,
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignItems: 'center'
    // },
};

export { Input };
