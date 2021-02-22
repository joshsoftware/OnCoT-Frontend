import { Input, Form, FormFeedback, FormGroup, UncontrolledPopover } from 'reactstrap';
import { Card, CardBody, Button} from 'reactstrap';
import { PopoverBody } from 'reactstrap';
import "./infoComponent.css"

const UserProfileComponent = (props) => {
    return(
        <div>
            <Card className="bg-transparent text-center border-0 opacity-5">
                <CardBody className="text-white">  
                    
                    <h2 className="pb-3 text-success">OnCot</h2>
                    <h5 className="pb-3">Please fill below details</h5>
                    
                    <Form>
                        <FormGroup className="position-relative">
                            <Input 
                                className="shadow"
                                id="popoverforName"
                                type="text" 
                                placeholder="Name" 
                                onFocus={(event) => event.target.placeholder = ""} 
                                onBlur={(event) => event.target.placeholder = "Name"}
                                onChange={props.nameChanged} 
                                invalid={props.nameInvalid.invalid} />

                                <UncontrolledPopover placement="left" trigger="focus" target="popoverforName">
                                    <PopoverBody>Name</PopoverBody>
                                </UncontrolledPopover>
                                
                            <FormFeedback className="text-center">{props.nameInvalid.message}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="text-left">
                            <Input 
                                className="shadow"
                                id="popoverforMobile"
                                type="text" 
                                placeholder="Mobile" 
                                onFocus={(event) => event.target.placeholder = ""} 
                                onBlur={(event) => event.target.placeholder = "Mobile"}
                                onChange={props.mobileChanged}
                                invalid={props.mobileInvalid.invalid}
                            />

                                <UncontrolledPopover placement="left" trigger="focus" target="popoverforMobile">
                                    <PopoverBody>Mobile</PopoverBody>
                                </UncontrolledPopover>

                            <FormFeedback className="text-center">{props.mobileInvalid.message}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Button 
                                className="shadow mt-3" 
                                color="success" 
                                type="submit" 
                                onClick={props.buttonClicked}>
                                    Continue
                            </Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card> 
        </div>    
    )
}

export default UserProfileComponent;