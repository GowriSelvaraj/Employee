import './App.css';
import { EmpForm } from './components/empForm';
import { EmpList } from './components/empList';

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <EmpForm></EmpForm>
        <EmpList></EmpList>
      </div>
      
    </div>
    </div>
  );
}

export default App;
