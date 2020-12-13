import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const QuestionItem = props => {
    return (
        <View style={styles.question}>
            <View style={styles.questionContainer}>
                <Text style={styles.title}>{props.questionText}</Text>
            </View>
            <View style={styles.details}>
                <Button
                    title={props.option1}
                />
                <Button
                    title={props.option2}
                />
                <Button
                    title={props.option3}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    question: {
        shadowColor: 'black',
        shadowOpacity: 0.50,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 230,
        margin: 20
    },
    questionContainer: {
        width: '100%',
        height: '45%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    details: {
        alignItems: 'center',
        height: '100%',
        padding: 0
    },
    title: {
        textAlign: 'center' , 
        justifyContent: 'center',
       // color: 'red',
        fontSize: 38,
        marginVertical: 30
    },
    option: {
        //   fontFamily: 'open-sans',
           fontSize: 20,
           marginVertical: 4
       },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
});

export default QuestionItem;