import React from 'react';
import PropTypes from 'prop-types';

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

import './customIOStyle.css';

const CustomIOComponent = ({
  showOutput,
  toggle,
  handleRunClick,
  handleInputChange,
  handleOnInputClick,
  handleEvent,
  inputValue,
  outputValue,
  loading,
}) => {
  return (
    <Container fluid className='mainClass p-0 pl-1 '>
      <Row>
        <Col>
          {showOutput ? (
            <div className='module'>
              <Card className='card rounded-0 text-white  custom-color header-color'>
                <CardHeader className='p-2 pl-4 pr-3 text-left'>
                  Output
                  <Button
                    className='py-0 px-2 mx-1 float-right bg-danger border-0 w-25'
                    onClick={handleRunClick}
                    disabled={loading}
                  >
                    { loading ? <Spinner size='sm' /> : 'Run' }
                  </Button>
                  <Button
                    className='py-0 px-2 mx-1 border-0 float-right custom-btn bg-color'
                    onClick={toggle}
                  >
                    Custom Input
                  </Button>
                </CardHeader>

                <CardBody className='inputOutputCard'>
                  <Input
                    className='outputScreen h-100 bg-dark border-secondary font-weight-bold text-white'
                    type='textarea'
                    value={loading ? '' : outputValue}
                    placeholder={
                    loading ? 'Loading...' : 'Run code to view output here'
                  }
                  />
                </CardBody>
              </Card>
            </div>
          ) : (
            <div className='module'>
              <Card className='card text-white rounded-0 custom-color header-color'>
                <CardHeader className=' p-2 p-1 pl-4 pr-3 text-left '>
                  Input
                  <Button
                    className='py-0 px-2 mx-0 float-right'
                    color='danger'
                    onClick={handleOnInputClick}
                  >
                    Run Code
                  </Button>
                </CardHeader>

                <CardBody>
                  <Input
                    className='textArea h-100 bg-dark border-secondary text-white'
                    placeholder='Enter input...'
                    type='textarea'
                    value={inputValue}
                    onChange={handleInputChange}
                    onCopy={handleEvent}
                    onCut={handleEvent}
                    onPaste={handleEvent}
                  />
                </CardBody>
              </Card>
            </div>
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
  handleEvent: PropTypes.func.isRequired,
  handleOnInputClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
  showOutput: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default React.memo(CustomIOComponent);
