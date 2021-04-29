import dotenv from 'dotenv';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import { Signup, Singin } from './components/Layout/Layout';
dotenv.config();
function App() {
  return (
    <>
      <Switch>

         <Route exact path="/" component={Home}/>
         <Route path="/auth/signup" component={Signup}/>
         <Route path="/auth/singin" component={Singin}/>

        {/* <Signup/> */}
      </Switch>
    </>
  );
}

export default App;
