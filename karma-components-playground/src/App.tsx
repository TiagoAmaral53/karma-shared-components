import './App.css';
import { Atom, Button } from '../../dist/esm';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Atom label={'Teste'}></Atom>
      <Button label={'click'} onClick={() => alert('hello world')}></Button>
    </>
  );
}

export default App;
