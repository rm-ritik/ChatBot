import './App.css'
import NavBar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import Apps from './pages/Apps';
import Documents from './pages/Documents';
import chatBotLogo from '/ChatBot.svg'
import sidebarOptions from './data/sidebarOptions.json';

import {useState, useEffect} from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

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
    <Router>
      <NavBar 
          className="navbar"
          logo={chatBotLogo} 
          onToggleSidebar={toggleSidebar}
      />
      <Sidebar
          visible={sidebarVisible}
          options={options}
          selected={selectedOption}
          onSelect={setSelectedOption}
      />
      
      <div className={`main-content ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/apps" />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
