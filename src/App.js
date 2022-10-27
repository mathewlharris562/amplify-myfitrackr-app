// import logo from './logo.svg';
import './App.css';
import { 
  Users 
} from './ui-components';
import { 
  NavBar 
} from './ui-components';
import { 
  withAuthenticator 
} from '@aws-amplify/ui-react';
import { 
  Storage 
} from '@aws-amplify/storage';


function App({ user, signOut}) {

  async function saveFile() {
    await Storage.put("test.txt", "Hello");
  }

  const navbarOverrides = {
    Button: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile

    },
    "Add User": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        saveFile()
        alert("Disabled: DEMO Purposes Only")
      }
    },
  }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        <Users 
          overrideItems={({ item, index }) => ({
            overrides: {
              Button: { color: "black"},
            },
          })}
        />
      </header>
      
    </div>
  );
}

export default withAuthenticator(App);
