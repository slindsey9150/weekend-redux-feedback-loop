import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feedbackInfo = (state = {}, action) => {
    if(action.type === 'ADD_FEEDBACK_INFO'){
      return action.payload
      }
    if(action.type === "CLEAR_FEEDBACK_INFO"){
      return {}
    }
    return state;
  }


  const store = createStore( 
    combineReducers({
      feedbackInfo
    }),
    applyMiddleware(logger),
  );

  export default store