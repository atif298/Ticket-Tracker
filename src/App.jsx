import './App.scss';
import EmployeCard from './components/EmployeCard/EmployeCard';

import team from "./assets/data/team.js";

const App = () => {
  
  return (
    <div className="app">
      <header>
        <h1 className='app__heading'>TICKET TRACKER</h1>
      </header>
      <EmployeCard className="app__container" teamArr={team} />
    </div>
  );
}

export default App;
