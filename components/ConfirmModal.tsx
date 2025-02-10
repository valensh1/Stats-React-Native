import { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Image } from 'react-native';
import Images from '../Database/Images';

interface ButtonText {
  buttonText: string;
  modalMessage: string;
  onConfirm: () => void;
  sport: string;
}

const ConfirmModal: React.FC<ButtonText> = ({
  buttonText,
  modalMessage,
  onConfirm,
  sport,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (endGameConfirm?: string): void => {
    setIsModalOpen(!isModalOpen);
    if (endGameConfirm === 'yes') {
      onConfirm();
    }
  };

  const imageToDisplayWithModalMessage = (): { [key: string]: string } => {
    const obj: Record<string, string> = {};
    switch (sport.toLowerCase()) {
      case 'basketball': {
        obj['uri'] = Images.endGameImage.basketball;
        break;
      }
      case 'hockey': {
        obj['uri'] = Images.endGameImage.hockey;
        break;
      }
    }
    // console.log(`This is the object ${JSON.stringify(obj)}`);
    return obj;
  };

  const imageSourceForModal = imageToDisplayWithModalMessage();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => modalHandler()}>
        <Text style={styles.linkStyling}>{buttonText}</Text>
      </Pressable>
      <Modal animationType="slide" visible={isModalOpen} transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Image
              source={imageSourceForModal}
              style={styles.basketballImage}
            />
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.yesButton}>
                <Text
                  style={styles.yesButtonText}
                  onPress={() => modalHandler('yes')}>
                  Yes
                </Text>
              </Pressable>
              <Pressable
                style={styles.cancelButton}
                onPress={() => modalHandler()}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ConfirmModal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#0080C6', // Blue background
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  basketballImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    color: '#FFF', // White text for contrast
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  yesButton: {
    backgroundColor: '#FFD700', // Yellow button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  yesButtonText: {
    color: '#0080C6',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#005A99', // Darker blue for cancel button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  linkStyling: {
    fontWeight: 'bold',
    color: '#0080C6',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
