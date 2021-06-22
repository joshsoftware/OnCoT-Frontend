import {
  Container,
  Row,
  FormGroup,
  Spinner,
  Button,
} from 'core-components';
import React from 'react';
import PropTypes from 'prop-types';
import 'modules/admin/problemsList/ProblemsListComponent/style.css';
import Gallery from 'react-grid-gallery';

const SnapshotsComponent = ({
  snapshotsData,
  candidateName,
  snapshotsAreLoading,
  handleGoBack,
}) => {
  if (snapshotsAreLoading) {
    return <Spinner className='loader' />;
  }

  return (
    <Container fluid className='px-5'>
      <FormGroup>
        <div className='sticky-top bg-light' style={{ zIndex: 1 }}>
          <Row fluid className='py-1 px-3'>
            <h4><b>Snapshots </b> &gt; {candidateName}  </h4>
          </Row>
          <Row className='px-3 pb-2'>
            <Button onClick={handleGoBack}> ◄ Go back</Button>
          </Row>
        </div>
        <Row className='px-3 position-relative'>
          <div style={{
            display: 'block',
            minHeight: '1px',
            width: '100%',
            border: '1px solid #ddd',
            overflow: 'auto',
            textAlign: 'center',
            background: 'white',
          }}
          >
            {(snapshotsData.length === 0) &&
              <div className='text-danger'> Nothing to show </div>}
            <Gallery
              rowHeight={250}
              images={snapshotsData}
              enableImageSelection={false}
            />
          </div>
        </Row>
      </FormGroup>
    </Container>
  );
};
SnapshotsComponent.propTypes = {
  snapshotsData: PropTypes.checkPropTypes.isRequired,
  snapshotsAreLoading: PropTypes.bool.isRequired,
  candidateName: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default React.memo(SnapshotsComponent);
