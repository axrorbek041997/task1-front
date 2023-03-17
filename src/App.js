import BaseTabs from './components/BaseTabs/BaseTabs';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <header>
        <div className='d-flex align-items-center justify-content-between' >
          <h1 className='fs-2' >Schichtbuch</h1>
          <img width={100} height={60} src={logo} alt='logo' />
        </div>
      </header>
      <BaseTabs />

    </div>
  );
}

export default App;
