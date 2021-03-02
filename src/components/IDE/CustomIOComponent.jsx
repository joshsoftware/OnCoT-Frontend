import { 
  Row, 
  Col, 
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Spinner,
  CardText
} from "reactstrap";

import "./customIOCss.css"

const CustomIOComponent = (props) => {
	return (
    	<div className="mainClass bg-secondary p-4">
      		<Row>
        		<Col>
					{ props.showOutput ? 
						<Card 
							className="bg-dark text-white font-weight-bold" 
							style={{height:300, borderRadius: 5 }}>

							<CardHeader className="p-1 pl-2 text-left">
								OUTPUT
								<Button 
									className="py-0 px-2 mx-0 font-weight-bold float-right" 
									color="success"
									onClick={props.toggle}>
										CUSTOM INPUT
								</Button>
							</CardHeader>
				
							<CardBody rows="10">
								{true ? 
									<CardText className="text-left">{props.outputValue}</CardText>
									:
									<Spinner style={{alignItems:"center"}} className="text-center" size="sm" color="light"/>
								}
							</CardBody>
						</Card>
						:
						<Card
							className="bg-dark text-white font-weight-bold" 
							style={{height:300, borderRadius: 5 }}>
								
							<CardHeader className="p-1 pl-2 text-left">
								INPUT
								<Button 
									className="py-0 px-2 mx-0 font-weight-bold float-right" 
									color="danger"
									onClick={() => { props.toggle(); props.handleRunClick(); }}>
										RUN CODE
								</Button>
							</CardHeader>

							<CardBody>
								<Input 
									className="bg-dark border-secondary text-white font-weight-bold" 
									style={{ height:"100%", borderRadius: 5, resize:"none"}}
									placeholder="Enter input..." 
									type="textarea"
									value={props.inputValue}
									onChange={props.handleInputChange}/>
							</CardBody>
						</Card>
					}
        		</Col>
      		</Row>

	  		{/* <Row className="pt-3">
				<Col>
					<FormGroup>
						<Button 
						className="font-weight-bold shadow-sm" 
						disabled={!props.show}
						onClick={props.toggle}
						style={{width:"100%", borderRadius: 5}} 
						color="success"> 
							Custom Input 
						</Button>
					</FormGroup>
				</Col>

				<Col>
					<FormGroup>
						<Button 
						className="font-weight-bold shadow-sm" 
						disabled={props.show}
						onClick={props.toggle}
						style={{width:"100%", borderRadius: 5}} 
						color="danger"> 
							Check Output 
						</Button>
					</FormGroup>
				</Col>
			</Row> */}

{/* 
			<Row className="pt-3">
				<Col>
					<Button 
						className="font-weight-bold shadow-sm" 
						style={{width:"100%", borderRadius: 5}}
						color={props.show ? "success" : "danger"}
						id={props.show ? undefined : "runCustomInput"}
						onClick={props.toggle}>

						{props.show ? <>Custom Input</> : <>Check Output</>} 

					</Button>
				</Col>
			</Row> */}

    	</div>
	)
}

export default CustomIOComponent;


// language_id
// source_code
// std_in

// token

// ->token