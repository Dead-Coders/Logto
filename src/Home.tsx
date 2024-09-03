import { useLogto } from "@logto/react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Home = () => {   
    const {isAuthenticated} = useLogto()
  return (
    <div>
       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Logot</h1>
      <SignIn></SignIn>
     
      { isAuthenticated && <SignOut/>}

    </div>
  )
}

export default Home
