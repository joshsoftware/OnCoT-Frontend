import axios from "axios";
import { useReducer, useState } from "react";
import * as yup from 'yup';

import UserProfileComponent from "components/UserProfileComponent"

const schema = yup.object().shape({
    name: yup.string().required().matches(/^[A-Za-z ]*$/, 'name should be valid'),
    mobile: yup.string().required().matches(/^[0-9]{10}$/, 'mobile should be a 10-digit valid numeric value')
});

const reducer = (state, action) =>{

    switch (action.type) {
        case "name":
            return {...state, name: action.payload.name}
        
        case "mobile":
            return {...state, mobile: action.payload.mobile}

        default: return state;
    }
}


const UserProfileContainer = () => {

    const initialInvalidState = {
        name: { invalid:false, message:"" }, 
        mobile: { invalid:false, message:"" }
    }

    const [invalid, setInvalid] = useReducer(reducer, initialInvalidState)

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [nextPageAllowed, setNextPageAllowed] = useState(false);
    const handleNameChange = (event) => {
        const name = event.target.value;
        setName(name)
        setInvalid({type:"name", payload:{name:{invalid:false, message:""}}})
    }

    const handleMobileChange = (event) => {
        const mobile = event.target.value;
        setMobile(mobile)
        setInvalid({type:"mobile", payload:{mobile:{invalid:false, message:""}}})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        schema.validate({
            name: name,
            mobile: mobile
        }, {abortEarly:false})
        .then(() => {
            saveInformation()
        })
        .catch((error) => {
            const errors = error.errors;
            console.log(errors);

            var hint = ""
            errors.forEach(error => {
                hint = error.split(" ")[0]
                if (hint === "name"){
                    const message = error[0].toUpperCase() + error.substring(1, error.length)
                    setInvalid({type:"name", payload:{name:{invalid:true, message:message}}})
                }
                if (hint === "mobile") {
                    const message = error[0].toUpperCase() + error.substring(1, error.length)
                    setInvalid({type:"mobile", payload:{mobile:{invalid:true, message:message}}})
                }
            });
        });
    }

    const saveInformation = () => {
        // API call for saving details and timestamp.

        axios.post('API', {
            name: name, //"Adam Gills"
            mobile: mobile //145436777
        })
        .then((response) => {
            setNextPageAllowed(true);
        })
        .catch((error) => {
            //error
        })
    }

    if (nextPageAllowed) {
        return (
            <div>
                {/* Go to next page */}
            </div>
        )
    }

    return(
        <UserProfileComponent 
            nameChanged={handleNameChange} 
            mobileChanged={handleMobileChange} 
            buttonClicked={handleSubmit}

            nameInvalid={invalid.name}
            mobileInvalid={invalid.mobile}
        />
    )
}

export default UserProfileContainer;


