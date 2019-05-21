import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './App.css';
import store from '../store';
import _ from 'lodash';

// console.log(store.getState(),"APP ++++++++++")
function App() {
  const { contacts, user, activeUserId  } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;