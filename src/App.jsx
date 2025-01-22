import React from 'react';
import ReacDom from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MaahMaah from './components/MaahMaah';

function App (){
  return (
    <div>
      <Header />
      <MaahMaah />  
      <Footer />
    </div>
  );
}

export default App;