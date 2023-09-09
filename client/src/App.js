import { Route, useLocation } from 'react-router-dom';
import { Home, Detail, Form, Landing } from './views';
import NavBar from './componentes/NavBar/NavBar';
function App() {
const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar />}
      <Route exact path='/landing' render = { () => <Landing/>} />
      <Route exact path='/home' render={() => <Home/>} />
      <Route exact path='/' render={() => <Landing/>} />
      <Route exact path='/create' render={() => <Form/>} />
      <Route exact path='/detail' render={() => <Detail/>} />        
    </div>
  );
}

export default App;
