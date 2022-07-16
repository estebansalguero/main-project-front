import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import CreateUser from './Components/Navbar/UserFunc/CreateUser';
import ReadUser from './Components/Navbar/UserFunc/ReadUser';
import UpdateUser from './Components/Navbar/UserFunc/UpdateUser';
import DeleteUser from './Components/Navbar/UserFunc/DeleteUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='contentContainer'>
    <Navbar />
    <div className='mainContent'>
    <App />
    <CreateUser />
    <ReadUser />
    <UpdateUser />
    <DeleteUser />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
