import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState} from "react";
import store from "../../store"


function Feelings () {
    const [userFeeling, setFeeling] = useState({
        feeling: ""
    })
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <>
        <h2>How are you feeling today?</h2>
        <form>
        <input type="number"></input>
        <button>NEXT</button>
        </form>
        </>
    )
}

export default Feelings