/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <div className='App'>
      <h1>This is a dummy project to learn multi container docker workflow</h1>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={Fib} />
          <Route path={'/otherPage'} element={OtherPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
