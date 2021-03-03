import { Col, Navbar, NavbarBrand, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import './HeaderIDE.css';

const HeaderIDE = (props) => {
  const { organisationName,
    currentProblem,
    totalProblems,
    time,
  } = props;

  return (
    <Navbar className='bg-dark justify-content-around' md='auto' xl='auto' lg='auto' p-1>
      <NavbarBrand className='mx-5 text-white font-weight-bold'>
        <h3 className='font-weight-bold'>{organisationName}</h3>
      </NavbarBrand>
      <Col className='mx-5 d-flex justify-content-end mr-5'>
        <h3 className='text-success align-middle mr-5 font-weight-bold'>OnCOT</h3>
      </Col>
      <Col className='mx-5 justify-content-end d-flex'>
        <div className='mx-5 justify-content-end d-flex'>
          <Button className='p-2 btn-circle'>{'<'}</Button>
          <h5 className='text-white align-middle mt-2 mx-3'>
            Problem
            {' '}
            {currentProblem}
            /
            {totalProblems}
          </h5>
          <Button className='p-2 btn-circle'>{'>'}</Button>
        </div>
        <h2 className='text-white align-middle font-weight-bold' id='timeLeft'>{time}</h2>
      </Col>
    </Navbar>
  );
};

HeaderIDE.propTypes = {
  organisationName: PropTypes.string.isRequired,
  currentProblem: PropTypes.number.isRequired,
  totalProblems:PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};
export default HeaderIDE;
