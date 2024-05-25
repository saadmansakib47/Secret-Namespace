// frontend/src/components/PostEditor.js
import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const quillRef = useRef(null);

  useEffect(() => {
    const quill = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ],
      },
    });

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/posts', { title, content });
      alert('Post created successfully');
    } catch (error) {
      console.error('There was an error creating the post!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <div ref={quillRef} style={{ height: '300px' }}></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostEditor;
