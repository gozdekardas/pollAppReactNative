import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import QuestionItem from '../components/QuestionItem';

const QuestionsOverviewScreen = props => {
  const questions = useSelector(state => state.questions.availablequestions);
//  console.log(questions);
  return (
    <FlatList
      data={questions}
      keyExtractor={item => item.questionId}
      renderItem={itemData =>
        <QuestionItem
          questionText={itemData.item.questionText}
          option1={itemData.item.option1}
          option2={itemData.item.option2}
          option3={itemData.item.option3}
         /* onViewDetail={() => {
            props.navigation.navigate('ProductDetails',
              { productId: itemData.item.id, productTitle: itemData.item.title })
          }}*/
        />
      }
    />
  );
};

QuestionsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'SORULAR'
  }
};

export default QuestionsOverviewScreen;
