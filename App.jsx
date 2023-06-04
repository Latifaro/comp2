import React from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Lightbox from './components/Lightbox';

const App = () => {
  return (
    <div>
      <Button color="blue" disabled={false}>Click me</Button>
      <Navbar icon={<i className="icon"></i>} links={['Home', 'About', 'Contact']} />
      <Modal show={true} onClose={() => console.log('Modal closed')}>Modal content</Modal>
      <Lightbox
        images={['image1.jpg', 'image2.jpg']}
        size="300px"
        show={true}
        onClose={() => console.log('Lightbox closed')}
      />
    </div>
  );
};

export default App;

