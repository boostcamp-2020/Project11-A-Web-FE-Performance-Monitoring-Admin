import { combineReducers } from 'redux';
import { projectsReducer } from './projects/projectsReducer';
import { curProjectReducer } from './curProject/curProjectReducer';

const rootReducer = combineReducers({
  projectsReducer,
  curProjectReducer,
});

export default rootReducer;
