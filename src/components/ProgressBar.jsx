import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {
  return (
    <div>
     
      <ProgressBar variant="info" now={20} style={{ marginBottom: '25px' }} />
      <ProgressBar variant="warning" now={60} style={{ marginBottom: '25px' }} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export default ContextualExample;
