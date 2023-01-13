import React from 'react';
import Filter from './components/Filter';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';

function App() {

  return (
    <>
      <div className="container">
        <Filter />
        <main className='flex w-full space-x-4 my-4'>
          <EmailList />
          <EmailBody />
        </main>
      </div>
    </>
  )
}

export default App
