import { combineReducers } from 'redux';
import { projectsReducer } from './projects/projectsReducer';
import { curProjectReducer } from './curProject/curProjectReducer';
import { userReducer } from './user/userReducer';

const rootReducer = combineReducers({
  userReducer,
  projectsReducer,
  curProjectReducer,
});

export default rootReducer;
