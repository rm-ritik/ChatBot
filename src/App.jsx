import './App.css'
import NavBar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import chatBotLogo from '/ChatBot.svg'

import {useState} from 'react';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  return (
    <>
    <NavBar className="navbar" logo={chatBotLogo} onToggleSidebar={toggleSidebar} />
    <Sidebar visible={sidebarVisible} />
    </>
  )
}

export default App
