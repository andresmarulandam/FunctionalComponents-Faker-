import { faker } from '@faker-js/faker';

import './App.css';
import CardStudent from './components/CardStudent';

function App() {
  return (
    <>
      <section
        style={{
          padding: '20px',
          maxWidth: '40%',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Students Enrolled</h1>
        <CardStudent
          fullname={faker.person.fullName()}
          programmingExperience={faker.number.int({ min: 0, max: 30 })}
        />
        <CardStudent
          fullname={faker.person.fullName()}
          programmingExperience={faker.number.int({ min: 0, max: 30 })}
        />
        <CardStudent
          fullname={faker.person.fullName()}
          programmingExperience={faker.number.int({ min: 0, max: 30 })}
        />
      </section>
    </>
  );
}

export default App;
