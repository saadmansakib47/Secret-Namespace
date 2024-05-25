// frontend/src/App.js
import React from 'react';
import './styles.css';
import PostEditor from './components/PostEditor';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Secret Namespace</h1>
      </header>
      <PostEditor />
      <PostList />
    </div>
  );
}

export default App;
