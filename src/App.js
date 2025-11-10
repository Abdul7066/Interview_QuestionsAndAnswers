import React, { useState } from 'react';
import InterviewGuideHome from './components/InterviewGuideHome ';
import InterviewQA from './components/InterviewQA ';
import BackendInterviewQA from './components/BackendInterviewQA ';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <InterviewGuideHome onNavigate={setCurrentPage} />;
      case 'react':
        return <InterviewQA onBack={() => setCurrentPage('home')} />;
      case 'backend':
        return <BackendInterviewQA onBack={() => setCurrentPage('home')} />;
      default:
        return <InterviewGuideHome onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;