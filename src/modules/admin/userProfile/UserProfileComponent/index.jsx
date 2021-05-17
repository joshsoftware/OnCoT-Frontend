import PropTypes from 'prop-types';
import React from 'react';

import './style.css';
import {
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Table,
  Row,
  Col,
  Container,
  Button,
} from 'core-components';
import EditProfileContainer from 'modules/admin/editProfile/EditProfileContainer';
import ChangePasswordContainer from 'modules/admin/changePassword/ChangePasswordContainer';

const UserProfileComponent = (props) => {
  const {
    profileDetails,
    changePassVisible,
    setChangePassVisible,
    editProfileVisible,
    setEditProfileVisible,
  } = props;
  const { first_name, last_name, email, id } = profileDetails;

  if (typeof email === 'undefined') {
    return <Spinner />;
  }

  return (
    <Container fluid>
      <Row className='justify-content-center mt-5'>
        <Card className='w-75 border-0 shadow'>
          <CardHeader className='bg-dark text-white h4'>
            User ID: {id}
          </CardHeader>
          <CardBody>
            <Table className='h4'>
              <Row>
                <Col className='col-3'>First Name</Col>
                <Col>: {first_name}</Col>
              </Row>
              <br />
              <Row>
                <Col className='col-3'>Last Name</Col>
                <Col>: {last_name}</Col>
              </Row>
              <br />
              <Row>
                <Col className='col-3'>Email</Col>
                <Col>: {email}</Col>
              </Row>
              <br />
            </Table>
            <Row>
              <Col>
                <Button
                  className='btn btn-secondary'
                  onClick={() => { setEditProfileVisible(true); setChangePassVisible(false); }}
                >
                  Edit Profile
                </Button>
                <Button
                  className='btn btn-secondary ml-3'
                  onClick={() => { setChangePassVisible(true); setEditProfileVisible(false); }}
                >
                  Change Password
                </Button>
              </Col>
            </Row>
            <ChangePasswordContainer
              changePassVisible={changePassVisible}
              setChangePassVisible={setChangePassVisible}
            />
            <EditProfileContainer
              editProfileVisible={editProfileVisible}
              setEditProfileVisible={setEditProfileVisible}
            />
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};
UserProfileComponent.propTypes = {
  profileDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  changePassVisible: PropTypes.bool.isRequired,
  setChangePassVisible: PropTypes.func.isRequired,
  editProfileVisible: PropTypes.bool.isRequired,
  setEditProfileVisible: PropTypes.func.isRequired,
};

export default React.memo(UserProfileComponent);
