import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

import CustomIOComponent from "components/IDE/CustomIOComponent"

const IDEContainer = () => {

	const [showOutput, setshowOutput] = useState(true);
	const [inputValue, setInputValue] = useState("");

	const dispatch = useDispatch();
	const globalState = useSelector((state) => state);

	const toggle = () => setshowOutput(!showOutput);

	// language_id
	// source_code
	// std_in

	// token

	// ->token

	const handleRunClick = () => {
		if(inputValue){
			console.log(inputValue);
		}
	} 

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	}

	return (
		<CustomIOComponent 
			showOutput={showOutput}
			toggle={toggle}
			handleRunClick={handleRunClick}
			handleInputChange={handleInputChange}
			inputValue={inputValue}
			outputValue={"output..."}/>
		);
}

export default IDEContainer;
