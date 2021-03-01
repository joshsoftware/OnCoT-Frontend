import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup';

import UserProfileComponent from "components/UserProfileComponent"
import { candidateFormRequestAction } from "actions/candidateFormActions";

const schema = yup.object().shape({
    fName: yup.string().required().matches(/^[A-Za-z '.-]*$/, 'fName should be valid'),
    lName: yup.string().required().matches(/^[A-Za-z '.-]*$/, 'lName should be valid'),
    mobile: yup.string().required().matches(/^[0-9]{10}$/, 'mobile should be a 10-digit valid numeric value')
});

const reducer = (state, action) =>{

    switch (action.type) {
        case "fName":
            return {...state, fName: action.payload.fName}
        
        case "lName":
            return {...state, lName: action.payload.lName}
            
        case "mobile":
            return {...state, mobile: action.payload.mobile}

        default: return state;
    }
}

const UserProfileContainer = () => {

    const dispatch = useDispatch();
    const globalState = useSelector(state => state);

    console.log("globalState: ", globalState);

    const initialInvalidState = {
        fName: { invalid:false, message:"" },
        lName: { invalid:false, message:"" }, 
        mobile: { invalid:false, message:"" }
    }

    const [invalid, setInvalid] = useReducer(reducer, initialInvalidState)

    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [mobile, setMobile] = useState();

    const [nextPageAllowed, setNextPageAllowed] = useState(false);
    const [show, setShow] = useState(false);
    
    const handleFNameChange = (event) => {
        const fName = event.target.value;
        setFName(fName)
        setInvalid({type:"fName", payload:{fName:{invalid:false, message:""}}})
    }

    const handleLNameChange = (event) => {
        const lName = event.target.value;
        setLName(lName)
        setInvalid({type:"lName", payload:{lName:{invalid:false, message:""}}})
    }

    const handleMobileChange = (event) => {
        const mobile = event.target.value;
        setMobile(mobile)
        setInvalid({type:"mobile", payload:{mobile:{invalid:false, message:""}}})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        schema.validate({
            fName: fName,
            lName: lName,
            mobile: mobile
        }, {abortEarly:false})
        .then(() => {

            const data = {fName, lName, mobile};

            dispatch(candidateFormRequestAction(data));
            
            const show = globalState.error;
            setShow(show);
            
            setNextPageAllowed(true);
        })
        .catch((error) => {
            const errors = error.errors;

            var hint = ""
            errors.forEach(error => {
                hint = error.split(" ")[0]
                if (hint === "fName"){
                    const message = error.replace("fName", "First name") 
                    setInvalid({type:"fName", payload:{fName:{invalid:true, message:message}}})
                }
                if (hint === "lName"){
                    const message = error.replace("lName", "Last name")
                    setInvalid({type:"lName", payload:{lName:{invalid:true, message:message}}})
                }
                if (hint === "mobile") {
                    const message = error.replace("mobile", "Mobile")
                    setInvalid({type:"mobile", payload:{mobile:{invalid:true, message:message}}})
                }
            });
        });
    }

    const toggle = () => setShow(!show)

    if (nextPageAllowed) {
        // go to next page!!
        return (
            <h1 style={{color:"white"}}>
                Start your test!!
            </h1>
        )
    }

    return(
        <UserProfileComponent 
            fNameChanged={handleFNameChange}
            lNameChanged={handleLNameChange}

            mobileChanged={handleMobileChange} 
            buttonClicked={handleSubmit}

            fNameInvalid={invalid.fName}
            lNameInvalid={invalid.lName}
            mobileInvalid={invalid.mobile}

            result={globalState}
            toggle={toggle}
            show={show}
        />
    )
}

export default UserProfileContainer;