import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RulesComponent from "components/RulesComponent";

import { rulesRequest } from "../actions/loginActions";
import getRules from "../apis/rulesAPI";

const RulesContainer = () => {

    const dispatch = useDispatch();
    const result = useSelector((state) => state);
    
    const data = result.userlist.str;
   
    useEffect(() => {
        dispatch(rulesRequest(getRules));
    },[dispatch]);
    
    return (
        <RulesComponent data = {data}/>
    );
}
export default RulesContainer;