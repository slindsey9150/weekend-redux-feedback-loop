import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feelingInfo = (state = {}, action) => {
    if(action.type === 'ADD_FEELING_INFO'){
      return state, action.payload
      }
    if(action.type === "CLEAR_FEEDBACK_INFO"){
      return {}
    }
    return state;
  }

  const understandingInfo = (state = {}, action) => {
    if(action.type === 'ADD_UNDERSTANDING_INFO'){
      return feelingInfo, action.payload
      }
    if(action.type === "CLEAR_FEEDBACK_INFO"){
      return {}
    }
    return state;
  }
  const supportInfo = (state = {}, action) => {
    if(action.type === 'ADD_SUPPORT_INFO'){
      return feelingInfo, understandingInfo, action.payload
      }
    if(action.type === "CLEAR_FEEDBACK_INFO"){
      return {}
    }
    return state;
  }
  const commentInfo = (state = {}, action) => {
    if(action.type === 'ADD_COMMENT_INFO'){
      return feelingInfo, understandingInfo, supportInfo, action.payload
      }
    if(action.type === "CLEAR_FEEDBACK_INFO"){
      return {}
    }
    return state;
  }


  const store = createStore( 
    combineReducers({
      feelingInfo,
      understandingInfo,
      supportInfo,
      commentInfo
    }),
    applyMiddleware(logger),
  );

  export default store