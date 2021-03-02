import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProblemsComponent from "components/ProblemsComponent"
import { statementRequest } from "../actions/problemStatementActions";

const ProblemsContainer = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.ProblemStatementReducer);
    
    let data = result.statement.str;
    let requestError = result.requestError;
    
    if(requestError)
    {
        data = requestError;
    }

    useEffect(() => {
        dispatch(statementRequest());
    },[dispatch]);
    
    return <ProblemsComponent data = {data}/>;
}

export default ProblemsContainer;
