import './App.css';
import { Atom, Button, Footer, Header } from '../../dist/esm';

function App() {
  return (
    <>
      <Header title={'React com vite'} ></Header>
      <div id='app'>
        <h1 className="">Hello world!</h1>
        <Atom label={'Teste'}></Atom>
        <Button label={'click'} onClick={() => alert('hello world')}></Button>
      </div>
      <Footer links={[{ name: "test", url: "" }]} ></Footer >
    </>
  );
}

export default App;
