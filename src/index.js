import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';

function Test() {
  return React.createElement('button', null, 'Privet')
}

function Test2() {
  return <button>Privet2</button>;
}

const FunctionalComponent = (props) => <h1 id="hi">{props.text}</h1>
const Element = <p>Параграф</p>;

class ClassComponent extends React.Component {
  render() {
    return React.createElement('div', {className: 'main'},
        React.createElement(FunctionalComponent, {text: 'свойство текст'}), Element
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ClassComponent />
    
  </React.StrictMode>
);
