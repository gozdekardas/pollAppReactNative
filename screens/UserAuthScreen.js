import React, { Component } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';

const UserAuthScreen = props => {
  const [user, onChangeUser] = React.useState('');
  const [pass, onChangePass] = React.useState('');

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        label="Username: "
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeUser(text)}
        value={user}
      />
      <Text>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangePass(text)}
        value={pass}
      />
      <Button
        title={'Giris Yap'}
        onPress={() => user.toUpperCase() === 'ADMIN' && pass.toUpperCase() === 'ADMIN' ? props.navigation.navigate('Admin') : props.navigation.navigate('QuestionsOverview')
        }
      />
    </View>
  );
}

UserAuthScreen.navigationOptions = navData => {
  return {
    headerTitle: 'GIRIS'
  }
};

export default UserAuthScreen;