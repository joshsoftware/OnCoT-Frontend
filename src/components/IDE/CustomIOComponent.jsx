import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Spinner,
  CardText,
} from 'reactstrap';

import './customIOCss.css';

const CustomIOComponent = (props) => {
  const {
    showOutput,
    toggle,
    handleRunClick,
    handleInputChange,
    inputValue,
    outputValue,
  } = props;

  return (
    <div className='mainClass bg-secondary p-4'>
      <Row>
        <Col>
          { showOutput
            ? (
              <Card
                className='bg-dark text-white font-weight-bold'
                style={{ height:300, borderRadius: 5 }}
              >

                <CardHeader className='p-1 pl-2 text-left'>
                  OUTPUT
                  <Button
                    className='py-0 px-2 mx-0 font-weight-bold float-right'
                    color='success'
                    onClick={toggle}
                  >
                    CUSTOM INPUT
                  </Button>
                </CardHeader>

                <CardBody rows='10'>
                  {true
                    ? <CardText className='text-left'>{outputValue}</CardText>
                    :									<Spinner style={{ alignItems:'center' }} className='text-center' size='sm' color='light' />}
                </CardBody>
              </Card>
            )
            :						(
              <Card
                className='bg-dark text-white font-weight-bold'
                style={{ height:300, borderRadius: 5 }}
              >

                <CardHeader className='p-1 pl-2 text-left'>
                  INPUT
                  <Button
                    className='py-0 px-2 mx-0 font-weight-bold float-right'
                    color='danger'
                    onClick={() => { toggle(); handleRunClick(); }}
                  >
                    RUN CODE
                  </Button>
                </CardHeader>

                <CardBody>
                  <Input
                    className='bg-dark border-secondary text-white font-weight-bold'
                    style={{ height:'100%', borderRadius: 5, resize:'none' }}
                    placeholder='Enter input...'
                    type='textarea'
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </CardBody>
              </Card>
            )}
        </Col>
      </Row>
    </div>
  );
};

CustomIOComponent.propTypes = {
  toggle: PropTypes.func.isRequired,
  handleRunClick: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
  showOutput: PropTypes.bool.isRequired,
};

export default CustomIOComponent;
