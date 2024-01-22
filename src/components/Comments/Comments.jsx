import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments () {
    return (
        <>
        <h2>Any comments you want to leave?</h2>
        <input type="text"></input>
        <button>NEXT</button>
        </>
    )
}

export default Comments