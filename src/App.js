
import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import {routes} from './routes.js'

function App() {
  const route=useRoutes(routes)
  return (
    <div>
      <Navbar/>
      {route}
    </div>
  );
}

export default App;
