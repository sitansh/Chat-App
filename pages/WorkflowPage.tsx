import React from 'react';

const WorkflowPage: React.FC = () => {
  return (
    <div className="flex-1 p-4 md:p-6 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Workflow Manager
        </h2>
        <p
          className="text-lg text-gray-400 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Streamline your tasks, visualize your progress, and collaborate seamlessly.
          Click the{' '}
          <a
            href="http://192.168.75.203:3000/"
            rel="noopener noreferrer"
            className="font-bold text-purple-400 hover:text-purple-300 transition-colors"
          >
            Workflow
          </a>{' '}
          button to launch the full experience.
        </p>
      </div>
    </div>
  );
};

export default WorkflowPage;
