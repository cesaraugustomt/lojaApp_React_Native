import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import Button from './shared/components/button/Button';
import Modal from './shared/components/modal/Modal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <Modal
        visible={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        text="texto teste"
        title="titulo teste"
      />
      <Button title="open" onPress={() => setModalVisible(true)} />
      <Login />
    </SafeAreaView>
  );
};

export default App;
