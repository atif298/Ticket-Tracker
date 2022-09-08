import './App.scss';
import EmployeCard from './components/EmployeCard/EmployeCard';

import team from "./assets/data/team.js";

const App = () => {
  
  return (
    <div className="app">
      <header>
        <h1 className='app__heading'>Ticket Tracker</h1>
      </header>
      <EmployeCard teamArr={team} />
    </div>
  );
}

export default App;
