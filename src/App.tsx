import './App.css';
import CardStudent from './components/CardStudent';

function App() {
  return (
    <>
      <h1>Students Enrolled</h1>
      <CardStudent fullname="Andres Marulanda" programmingExperience={3} />
    </>
  );
}

export default App;
