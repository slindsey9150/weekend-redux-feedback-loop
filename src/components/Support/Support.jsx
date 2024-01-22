import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";


function Support () {

    const [userSupport, setSupport] = useState({
        support: " "
    });
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_SUPPORT_INFO', payload: userSupport })
        history.push('/comments/')}

    return (
        <>
        <h2>How well are you being supported?</h2>
        <form  onSubmit={handleSubmit}>
        <input 
          onChange={(event) => setSupport({...userSupport, support: event.target.value})}
           type="number"></input>
        <button>NEXT</button>
        </form>
        </>
    )
}

export default Support