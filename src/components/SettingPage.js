import React, { Component } from 'react'
import {
  View,
  Button,
} from 'react-native';

import ContactInput from '../containers/SettingPage/ContactInput';
import MessageEdit from '../containers/SettingPage/MessageEdit';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    }
  }
  render() {
    return (
      <View style={{ marginLeft: '20%' }}>
        <Button
          title={'切換'}
          onPress={() => this.setState({ show: !this.state.show })}
        />

        {this.state.show === true && <ContactInput />}
        {this.state.show === false && <MessageEdit />}

      </View>
    );
  }
}



