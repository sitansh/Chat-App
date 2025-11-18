
import React, { useState } from 'react';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import WorkflowPage from './pages/WorkflowPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('workflow'); // Default to workflow page

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'workflow' && <WorkflowPage />}
      {activePage === 'chat' && <ChatPage />}
    </div>
  );
};

export default App;
