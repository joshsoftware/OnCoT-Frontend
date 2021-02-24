import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProblemsComponent from "components/ProblemsComponent"
import { statementRequest } from "../actions/problemStatementActions";
import getStatement from "../apis/problemStatementAPI";

const ProblemsContainer = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.ProblemStatementReducer);
    const data = result.statement.str;
    // console.log(result.statement.str);

    useEffect(() => {
        dispatch(statementRequest(getStatement));
    },[dispatch]);
    
    return(
        <ProblemsComponent data = {data}/>
  );
}

export default ProblemsContainer;
