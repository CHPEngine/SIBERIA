import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PokemonsPage } from '@pages';

// import './App.css';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );

export default App;
