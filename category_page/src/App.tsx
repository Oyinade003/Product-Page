import { useState } from 'react';
import Header from './components/Header';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      <div className="app">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Footer />
      </div>
    </>
  );
}

export default App;
