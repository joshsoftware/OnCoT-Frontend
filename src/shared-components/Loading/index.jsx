import { Spinner } from 'core-components';

function Loading() {
  return (
    <div className='overview-block d-flex text-center justify-content-center text-success '>
      <Spinner size='sm' />
    </div>
  );
}

export default Loading;
