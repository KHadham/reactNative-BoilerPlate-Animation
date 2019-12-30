import {combineReducers} from 'redux';


// you can customize here
import ReDuCeerExPOne from './reducer1Example';
import ReDuCeerExPTwo from './reducer2Example';

const appReducer = combineReducers({
  ReDuCeerExPOne,
  ReDuCeerExPTwo
});

export default appReducer;
