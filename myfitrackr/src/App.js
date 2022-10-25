// import logo from './logo.svg';
import './App.css';
import { 
  Users 
} from './ui-components';
import { 
  NavBar 
} from './ui-components';
import { 
  Footer 
} from './ui-components';


function App() {
  return (
    <div className="App">
      
      <NavBar width={"100%"}/>
      <header className="App-header">
      <Users />
      </header>
      <Footer width={"100%"}/>
      
    </div>
  );
}

export default App;
