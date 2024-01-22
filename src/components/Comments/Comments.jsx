import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";


function Comments () {

    const [userComments, setComments] = useState({
        comments: " "
    });
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_COMMENT_INFO', payload: userComments })
        history.push('/review/')}


    return (
        <>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleSubmit}>
        <input 
        onChange={(event) => setComments({...userComments, comments: event.target.value})}
        type="text"></input>
        <button>SUBMIT</button>
        </form>
        </>
    )
}

export default Comments