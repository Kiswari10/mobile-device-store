import { Provider } from 'react-redux';
import { BaseLayout } from './components/layout/BaseLayout';

import { Router } from './routes';
import { store } from './stateManagement/store';

export const App = () => {
  return (
    <Provider store={store}>
        <BaseLayout>
          <Router />
        </BaseLayout>
    </Provider>
  );
};
