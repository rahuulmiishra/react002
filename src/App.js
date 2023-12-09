import logo from './logo.svg';
import './App.css';

import Autocomplete from './autocomplete';

// https://api.npoint.io/6fe80fd8273d7a0957e9

function App() {
  return (
    <div className="App">
      <h1>Architecting React Components</h1>

      <Autocomplete />
    </div>
  );
}

export default App;

// function yugManager() {
//   let count = 0;

//   function incrementYug() {
//     count++;
//     const message = `value ${count}`;

//     return function printYug() {
//       console.log(message);
//     }
//   }

//   return incrementYug;
// }

// const incrementYug = yugManager();
// const yugLogger = incrementYug();

// incrementYug();
// incrementYug();

// yugLogger();
