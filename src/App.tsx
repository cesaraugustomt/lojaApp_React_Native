import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import store from './config/store';
import Login from './modules/login';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
