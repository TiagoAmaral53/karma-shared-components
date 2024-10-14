import './App.css';
import { Atom, Button } from '../../dist/esm';

function App() {
  return (
    <>
      <h1 className="">Hello world!</h1>
      <Atom label={'Teste'}></Atom>
      <Button label={'click'} onClick={() => alert('hello world')}></Button>
    </>
  );
}

export default App;
