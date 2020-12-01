import { combineReducers } from 'redux';
import { projectsReducer } from './projects/projectsReducer';

const rootReducer = combineReducers({
  projectsReducer,
});

export default rootReducer;
