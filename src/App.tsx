import { Provider } from 'react-redux';

import store from './config/store';
import Navigation from './Navigation';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <Navigation />
    </Provider>
  );
};

export default App;
