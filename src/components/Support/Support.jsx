import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support () {
    return (
        <>
        <h2>How well are you being supported?</h2>
        <input type="number"></input>
        <button>NEXT</button>
        </>
    )
}

export default Support