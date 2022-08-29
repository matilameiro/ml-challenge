import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/shared/header/header';
import { Detail } from './Pages/detail/detail';
import { Home } from './Pages/home/home';
import { Results } from './Pages/results/results';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <main className='main'>
        <div className='main__container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="items" element={<Results />} />
            <Route path="items/:id" element={<Detail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
