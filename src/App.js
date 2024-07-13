import React from 'react';
import Team from './Team';
import teamsData from './teamsData';

const App = () => {
  return (
    <div className='bg-slate-700 '>
      
    <div className="container mx-auto bg- ">
    <h1 className="text-3xl font-bold text-center mb-8 text-blue-500 flex justify-center">Team and Projects</h1>
      
    </div>
    <div className='flex justify-center space-x-6'>
    {teamsData.map((team, index) => (
        <Team key={index} data={team} />
      ))}
      </div>
    </div>
  );
};

export default App;
