import React from 'react';
import logo from './logo.svg';
import './App.css'; // ここでcssを読み込んでいる

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const count = 999;
  return <span className="likeButton">♡ {count}</span>
}

export default App;
