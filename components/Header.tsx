import React from 'react';
import BotIcon from './icons/BotIcon';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const navLinkClasses = (page: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      activePage === page
        ? 'bg-gray-700 text-white'
        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`;

  const handleWorkflowClick = () => {
    setActivePage('workflow');
    window.open('http://192.168.75.203:3000/', 'noopener,noreferrer');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-700/50 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="bg-purple-500 p-2 rounded-full">
          <BotIcon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-baseline gap-3">
          <h1 className="text-xl font-bold text-gray-200">Workflow Manager</h1>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <button onClick={handleWorkflowClick} className={navLinkClasses('workflow')}>
          Workflow
        </button>
        <button onClick={() => setActivePage('chat')} className={navLinkClasses('chat')}>
          Chat
        </button>
      </nav>
    </header>
  );
};

export default Header;
