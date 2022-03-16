
import './App.css';
import './Hello.css';

function Test(props) {
  return (
   <p className='headone'> Hello from  <strong>{props.name}</strong>  <i><h1>This is a heading. </h1> </i> {5+10} </p>
  );
}

export default Test;