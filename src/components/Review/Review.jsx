import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";
import store from "../../store"
import axios from 'axios'


function Review () {
    let feelingInfo = useSelector(store => store.feelingInfo)
    let understandingInfo = useSelector(store => store.understandingInfo)
    let supportInfo = useSelector(store => store.supportInfo)
    let commentInfo = useSelector(store => store.commentInfo)

    
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
              feeling: feelingInfo.feeling,
              understanding: understandingInfo.understanding,
              support: supportInfo.support,
              comments:  commentInfo.comments          
             }
          })
          .then(response => {
            console.log('Full response from server:', response);
            dispatch({ type: 'CLEAR_FEEDBACK_INFO' })
            history.push('/')  
          })
          .catch(error =>{
            console.log('Got an error from server:', error);
          });
        
    
        }

    return (
        <>
        <h2>Review Your Submission</h2>
        <form onSubmit={handleSubmit}>
                <p><b>How are you feeling today?</b> {feelingInfo.feeling}</p>
                <p><b>How well are you understanding the content?</b>{understandingInfo.understanding}</p>
                <p><b>How well are you being supported?</b>{supportInfo.support}</p>
                <p> <b>Any comments you want to leave? </b> <>{commentInfo.comments}</></p>
            
        <button data-testid="next">Submit</button>
        </form>
        </>
    )
}

export default Review