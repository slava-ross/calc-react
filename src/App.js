import React from 'react';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Кошелёк</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <Total />
          <History />
          <Operation />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
