import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../Styles/Colors';

interface ModalProps {
  message: string;
}

const Modal = ({ message }: ModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    width: '85%',
    height: '20%',
    padding: '1%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.globalAlternateColor,
    justifyContent: 'center',
    position: 'absolute',
    top: '50%', // Moves the modal container halfway down the screen
    left: '50%', // Centers the container horizontally
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }], // Shifts the modal left by half of its width to truly center it
    backgroundColor: colors.globalSecondaryColor,
    zIndex: 100,
  },
  message: {
    textAlign: 'center',
    fontWeight: 600,
    fontStyle: 'italic',
  },
});
export default Modal;
