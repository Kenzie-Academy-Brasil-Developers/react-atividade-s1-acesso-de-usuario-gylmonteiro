import "./App.css";
import { useState } from "react";
import RestrictedPage from "./component/restrictPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Gyl";

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          statusLog={isLoggedIn}
          nameUser={user}
          login={Login}
          logout={Logout}
        />
      </header>
    </div>
  );
}

export default App;
