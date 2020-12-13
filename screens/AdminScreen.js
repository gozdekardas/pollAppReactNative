import React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import QuestionItem from '../components/QuestionItem';

const AdminScreen = props => {
  const questions = useSelector(state => state.questions.availablequestions);

  
//  console.log(questions);
  return (
    <View style={styles.page}>
    <View style={styles.buttons}>
    <Button
            title={'Soru Ekle'} color="black"
            onPress={() =>  props.navigation.navigate('') 
          }
        />
    </View>
    <View style={styles.buttons}>
    <Button
            title={'Sorulari Gor'} color="black"
              onPress={() =>  props.navigation.navigate('QuestionsOverview') }
        />
    </View>
    <View style={styles.buttons}>
    <Button
            title={'Demo'} color="black"
              onPress={() =>  props.navigation.navigate('Demo') }
        />
    </View>
</View>
  );
};

AdminScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Admin Sayfasi'
  }
};

const styles = StyleSheet.create({
  page: {
      shadowColor: 'black',
      shadowOpacity: 0.50,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 300,
      margin: 100
  },
  buttons: {
   //   fontWeight: 'bold',fontSize: 50,
      width: '100%',
      height: '30%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',justifyContent: 'center',
      alignItems: 'center'
  }
});

export default AdminScreen;
