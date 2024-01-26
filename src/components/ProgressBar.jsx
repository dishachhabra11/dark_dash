import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {

  const data=[20,60,80];
  return (
    <div>
     
     <span>Garbage Tax</span> <ProgressBar variant="info" now={data[0]}  label={`${data[0]}%`} style={{ marginBottom: '25px' }} />
     <span>Water Tax</span><ProgressBar variant="warning" now={data[1]} label={`${data[1]}%`} style={{ marginBottom: '25px' }} />
     <span>Property Tax</span><ProgressBar variant="danger" now={data[2]} label={`${data[2]}%`} />
    </div>
  );
}

export default ContextualExample;
