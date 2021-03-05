import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Input,
  Button,
  Spinner,
} from 'core-components';
import './customIOCss.css';

const CustomIOComponent = (props) => {
  const {
    showOutput,
    toggle,
    handleRunClick,
    handleInputChange,
    inputValue,
    outputValue,
    loading,
  } = props;

  return (
    <Container className='mainClass bg-secondary p-4'>
      <Row>
        <Col>
          { showOutput
            ? (
              <Card
                className='card bg-dark text-white font-weight-bold'
              >
                <CardHeader className='p-1 pl-2 text-left'>
                  OUTPUT
                  {' '}
                  {loading
                    ? <Spinner classname='p-1 m-0' size='sm' />
                    : ''}

                  <Button
                    className='py-0 px-2 mx-1 font-weight-bold float-right'
                    color='danger'
                    onClick={handleRunClick}
                  >
                    RUN
                  </Button>

                  <Button
                    className='py-0 px-2 mx-1 font-weight-bold float-right'
                    color='success'
                    onClick={toggle}
                  >
                    CUSTOM INPUT
                  </Button>
                </CardHeader>

                <CardBody>
                  <Input
                    className='outputScreen h-100 bg-dark border-secondary font-weight-bold text-white'
                    type='textarea'
                    value={(loading) ? '' :  outputValue}
                    placeholder={(loading) ? 'Loading...' : 'Run code to view output here'}
                  />
                </CardBody>
              </Card>
            )
            :						(
              <Card
                className='card bg-dark text-white font-weight-bold'
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
                    className='textArea h-100 bg-dark border-secondary font-weight-bold text-white'
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
    </Container>
  );
};

CustomIOComponent.propTypes = {
  toggle: PropTypes.func.isRequired,
  handleRunClick: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
  showOutput: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(CustomIOComponent);
