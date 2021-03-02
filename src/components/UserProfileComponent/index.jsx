import { 
    Input, 
    Form, 
    FormFeedback, 
    FormGroup, 
    Label,
    Card, 
    CardBody, 
    Button,
    Row, 
    Col, 
    Spinner,
    Toast,
    ToastHeader
} from 'reactstrap';
import "./infoComponent.css"

const UserProfileComponent = (props) => {

    return(
        <div className="box">
            <Card className="bg-transparent border-0 opacity-5">
                <CardBody className="text-white">  
                    
                    <h2 className="pb-3 text-success text-center font-weight-bolder">OnCot</h2>
                    <h5 className="pb-3 text-center font-weight-bolder">Please fill below details</h5>
                    
                    <Form>
                        <Row className="py-3">
                            <Col>
                                <FormGroup>
                                    <Input 
                                        className="shadow"
                                        onChange={props.fNameChanged} 
                                        invalid={props.fNameInvalid.invalid} 
                                        placeholder="" />

                                    <Label className="text-left">First Name</Label>
                                    
                                    <FormFeedback className="text-center">{props.fNameInvalid.message}</FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Input 
                                        className="shadow"
                                        onChange={props.lNameChanged} 
                                        invalid={props.lNameInvalid.invalid} 
                                        placeholder="" />

                                    <Label className="text-left">Last Name</Label>
                                        
                                    <FormFeedback className="text-center">{props.lNameInvalid.message}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input 
                                        className="shadow"
                                        onChange={props.mobileChanged}
                                        invalid={props.mobileInvalid.invalid}
                                        placeholder=""
                                    />

                                    <Label className="text-left">Mobile</Label>

                                    <FormFeedback className="text-center">{props.mobileInvalid.message}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row className="py-3 text-center">
                            <Col>
                                <FormGroup>
                                    <Button 
                                        className="shadow w-75 mt-2 font-weight-bolder"
                                        color="success" 
                                        type="submit" 
                                        onClick={props.buttonClicked}>
                                            {props.result.loading ? <Spinner size="sm" color="light"/> : <>Continue</> }
                                    </Button>     
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card> 

            {props.showToast ? 

                <div className="errorToast">
                    <Toast isOpen={props.showToast}>
                        <ToastHeader className="w-100 px-4" icon="danger" toggle={props.toggle}>
                            The server encountered an error.<br/> 
                            Please try again later.
                        </ToastHeader>
                    </Toast>
                </div>
                :
                null}

        </div>    
    )
}

export default UserProfileComponent;