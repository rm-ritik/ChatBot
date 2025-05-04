import './App.css'
import NavBar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar';
import Chatbot from './components/chatbot/chatbot';
import Apps from './pages/Apps';
import Documents from './pages/Documents';
import sidebarOptions from './data/sidebarOptions.json';

import {useState, useEffect} from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    setOptions(sidebarOptions);
    setSelectedOption(sidebarOptions[0]?.label || null);
  }, []);

  useEffect(() => {
    if (!window.location.hash || window.location.hash !== '#/apps') {
      window.location.hash = '#/apps';
    }
  
    setOptions(sidebarOptions);
    setSelectedOption(sidebarOptions[0]?.label || null);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <Router>
      <NavBar
          onToggleSidebar={toggleSidebar}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
      />
      <Sidebar
          visible={sidebarVisible}
          options={options}
          selected={selectedOption}
          onSelect={setSelectedOption}
      />
      
      <div className={`main-content ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/apps" replace />} />
          <Route path="/apps" element={<Apps searchQuery={searchQuery} />} />
          <Route path="/documents" element={<Documents searchQuery={searchQuery} />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
    </>
  )
}

export default App
