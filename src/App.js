import { Provider } from 'react-redux';

import { Router } from './routes';
import { store } from './stateManagement/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
