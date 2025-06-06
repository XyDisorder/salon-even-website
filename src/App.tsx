// App.tsx
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Team from './pages/Team';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-beige text-noir font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
