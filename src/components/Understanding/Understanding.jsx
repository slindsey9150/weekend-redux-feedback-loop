import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding () {
    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <input type="number"></input>
        <button>NEXT</button>
        </>
    )
}

export default Understanding