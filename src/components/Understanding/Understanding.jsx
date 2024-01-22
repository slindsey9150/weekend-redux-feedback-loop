import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";


function Understanding () {

    const [userUnderstanding, setUnderstanding] = useState({
        understanding: " "
    });
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_FEEDBACK_INFO', payload: userUnderstanding })
        history.push('/support/')}

    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleSubmit} >
        <input 
         onChange={(event) => setUnderstanding({...userUnderstanding, understanding: event.target.value})}
        type="number"></input>
        <button>NEXT</button>
        </form>
        </>
    )
}

export default Understanding