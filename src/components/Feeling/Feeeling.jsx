import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";
import store from "../../store"


function Feelings () {
    const [userFeeling, setFeeling] = useState({
        feeling: " ",

    })
    
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_FEELING_INFO', payload: userFeeling })
        history.push('/understanding/')}

    return (
        <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
        <input
        data-testid="input"
        onChange={(event) => setFeeling({...userFeeling, feeling: event.target.value})}
        type="number"></input>
        <button data-testid="next">NEXT</button>
        </form>
        </>
    )
}

export default Feelings