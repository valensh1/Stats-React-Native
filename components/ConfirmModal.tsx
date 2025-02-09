import { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

interface ButtonText {
  buttonText: string;
}

const ConfirmModal: React.FC<ButtonText> = ({ buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <View>
      <Pressable>
        <Text style={styles.LinkStylying} onPress={modalHandler}>
          {buttonText}
        </Text>
      </Pressable>
      <Modal animationType="slide" visible={isModalOpen} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalContainerText}>
            Are you sure you want to end game
          </Text>
          <Pressable onPress={modalHandler}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
export default ConfirmModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 50,
    width: '80%',
    height: '50%',
    backgroundColor: 'red',
  },
  modalContainerText: {
    fontSize: 15,
  },
  LinkStylying: {
    fontWeight: 800,
    color: 'red',
  },
});
