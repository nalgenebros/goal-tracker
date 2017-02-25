import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from './Button';

class AlertModal extends Component {

  render() {
    return (
        <Modal
          style={{
             height: 500,
             width: 300
          }}
          animationType={'fade'}
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => { alert('Modal has been closed.'); }}
        >
         <View
            style={{ 
             marginTop: 22,
             alignItems: 'center',
            }}
         >
          <View>
            <Text>{this.props.modalText}</Text>
            <Button onPress={this.props.closeModal}>
              <Text>{this.props.closeText}</Text>
            </Button>

          </View>
         </View>
        </Modal>
    );
  }
}

export { AlertModal };
