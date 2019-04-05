import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { footer } from './footer.reducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  footer
});

export default rootReducer;