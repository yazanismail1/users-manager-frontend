import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';
import Detailed from './components/Detailed';
import Create from './components/Create';


export default function App() {
  const [usernameLog, setUsernameLog] = useState("")
  const [passwordLog, setPasswordLog] = useState("")
  const [token, setToken] = useState("")
  const [refresh, setRefresh] = useState("")
  const [authenticated, setAuthinticated] = useState(false)
  const [userObject, setUserObject] = useState("")
  const navigate = useNavigate();


  const onChangeUsername = (value) => {
    setUsernameLog(value)
  }

  const onChangePassword = (value) => {
    setPasswordLog(value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.
    post("http://127.0.0.1:8000/api/token/",{
        "username": usernameLog,
        "password": passwordLog,
    })
    .then((res) => {
      setToken(res.data.access)
      setRefresh(res.data.refresh)
      setAuthinticated(true)
      navigate('/home')   
      return true
    })
    .catch((err) => {
        swal({
            title: "Invalid Input!",
            text: "Invalid username or password",
            icon: "error",
            button: "Yes",
          });
    })
    };

  const handleDetails = (item) => {
    setUserObject(item)
    navigate('/edit')  
  }
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Layout />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/login" element={<Login 
            onChangeUsername={onChangeUsername}
            onChangePassword={onChangePassword}
            handleLogin={handleLogin}
            />}></Route>
            {authenticated === true ? (
              <>
              <Route exact path="/home" element={<Home 
                usernameLog={usernameLog}
                passwordLog={passwordLog}
                loggedin="Logged In Successfully!"
                handleDetails={handleDetails}
                />}></Route>
              <Route exact path="/edit" element={<Detailed
              item={userObject}
              usernameLog={usernameLog}
              passwordLog={passwordLog}
              />} 
              ></Route>
              <Route exact path="/create" element={<Create
              usernameLog={usernameLog}
              passwordLog={passwordLog}
              />} 
              ></Route>
              </>
            ): (
              <Route exact path="/home" element={<Error/>}></Route>
            )}
        </Routes>
    </>
  );
}


