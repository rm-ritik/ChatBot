import './App.css'
import NavBar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import chatBotLogo from '/ChatBot.svg'
import sidebarOptions from './data/sidebarOptions.json';

import {useState, useEffect} from 'react';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setOptions(sidebarOptions);
    setSelectedOption(sidebarOptions[0]?.label || null);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  return (
    <>
    <NavBar 
        className="navbar"
        logo={chatBotLogo} 
        onToggleSidebar={toggleSidebar} />
    <Sidebar
        visible={sidebarVisible}
        options={options}
        selected={selectedOption}
        onSelect={setSelectedOption}
      />
    </>
  )
}

export default App
