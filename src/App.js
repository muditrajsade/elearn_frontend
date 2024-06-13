import logo from './logo.svg';
import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Create_account from './components/create_account';
import Video_upload from './components/video_upload';

import Videos from './components/video_search';
function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path='/crt_account' element={<Create_account/>} />
        <Route path='/vid_upload' element={<Video_upload/>} />
        <Route path='/vid_search' element={<Videos/>} />
      </Routes>
    </div>
  );
}

export default App;
