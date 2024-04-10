// import React from 'react';
import './App.css';
import CategoryPage from './components/CategoryPage.tsx'
import Header from './components/Header.tsx';


function App() {
  return (
    <>
      <div className="app">
        <Header />
        <CategoryPage />
      </div>
    </>
  );
}

export default App;
