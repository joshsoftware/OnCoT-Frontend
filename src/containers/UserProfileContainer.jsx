import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup';

import UserProfileComponent from "components/UserProfileComponent"
import { candidateFormRequestAction } from "actions/candidateFormActions"

const schema = yup.object().shape({
    fName: yup.string().required().matches(/^[A-Za-z '.-]*$/, 'fName should be valid'),
    lName: yup.string().required().matches(/^[A-Za-z '.-]*$/, 'lName should be valid'),
    mobile: yup.string().required().matches(/^[0-9]{10}$/, 'mobile should be a 10-digit valid numeric value')
});

const reducer = (state, action) =>{

    switch (action.type) {
        case "fName":
            return {...state, fName: action.payload}
        
        case "lName":
            return {...state, lName: action.payload}
            
        case "mobile":
            return {...state, mobile: action.payload}

        case "fNameInvalid":
            return {...state, fName: action.payload }
        
        case "lNameInvalid":
            return {...state, lName: action.payload}
            
        case "mobileInvalid":
            return {...state, mobile: action.payload}

        default: return state;
    }
}

const UserProfileContainer = () => {

    const dispatch = useDispatch();
    const globalState = useSelector(state => state);

    console.log("globalState: ", globalState);

    const initialUserState = {
        fName: { value: "", invalidState: {invalid:false, message:""} },
        lName: { value: "", invalidState: {invalid:false, message:""} }, 
        mobile: { value: "", invalidState: {invalid:false, message:""} }
    }

    const [userState, setUserState] = useReducer(reducer, initialUserState);
    const [showToast, setShowToast] = useState(false);
    
    const handleFNameChange = (event) => {
        const fName = event.target.value;
        setUserState({type:"fName", payload:{value:fName, invalidState:{invalid:false, message:""}}});
    }

    const handleLNameChange = (event) => {
        const lName = event.target.value;
        setUserState({type:"lName", payload:{value:lName, invalidState:{invalid:false, message:""}}});
    }

    const handleMobileChange = (event) => {
        const mobile = event.target.value;
        setUserState({type:"mobile", payload:{value:mobile, invalidState:{invalid:false, message:""}}});
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const fName = userState.fName.value;
        const lName = userState.lName.value;
        const mobile = userState.mobile.value;

        schema.validate({
            fName: fName,
            lName: lName,
            mobile: mobile
        }, {abortEarly:false})
        .then(() => {

            const data = {fName, lName, mobile};
            const error = globalState.error;

            dispatch(candidateFormRequestAction(data));
        })
        .catch((error) => {
            const errors = error.errors;

            var hint = ""
            errors.forEach(error => {
                hint = error.split(" ")[0]
                if (hint === "fName"){
                    const message = error.replace("fName", "First name");
                    setUserState({type:"fNameInvalid", payload:{value: fName, invalidState:{invalid:true, message:message}}});
                }
                if (hint === "lName"){
                    const message = error.replace("lName", "Last name")
                    setUserState({type:"lNameInvalid", payload:{value: lName, invalidState:{invalid:true, message:message}}});
                }
                if (hint === "mobile") {
                    const message = error.replace("mobile", "Mobile")
                    setUserState({type:"mobileInvalid", payload:{value: mobile, invalidState:{invalid:true, message:message}}})
                }
            });
        });
    }

    const toggle = () => setShowToast(globalState.error)

    return(
        <UserProfileComponent 
            fNameChanged={handleFNameChange}
            lNameChanged={handleLNameChange}

            mobileChanged={handleMobileChange} 
            buttonClicked={handleSubmit}

            fNameInvalid={userState.fName.invalidState}
            lNameInvalid={userState.lName.invalidState}
            mobileInvalid={userState.mobile.invalidState}

            result={globalState}
            toggle={toggle}
            showToast={showToast}
        />
    )
}
export default UserProfileContainer;