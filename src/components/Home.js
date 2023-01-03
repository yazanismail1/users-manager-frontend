import React, { useState, useEffect } from "react";
import axios from "axios";
import ToastSuccess from "./ToastSuccess";
import Header from "./Header";
import Card from "./Card";

export default function Home(props) {
  const [showToast, setShowToast] = useState(true);
  const [allUsers, setAllUsers] = useState("");

  const handleClose = () => {
    setShowToast(false);
  };

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/", {
        auth: {
          username: props.usernameLog,
          password: props.passwordLog,
        },
      })
      .then((res) => {
        setAllUsers(res.data);
        
      })
      .catch((err) => {
      });
  }

  useEffect(() => {
    getData()
  }, [props.usernameLog]);

  const handleDelete = (pk) => {
    axios
    .delete(`http://127.0.0.1:8000/delete/${pk}`,{
        auth: {
            username: props.usernameLog,
            password: props.passwordLog,     
        },
    })
    .then((res) => {
        getData()
    })
    .catch((err) => {})
  }

  return (
    <div>
      {showToast && <ToastSuccess handleClose={handleClose} />}
      <Header usernameLog={props.usernameLog} />
      <div className="flex flex-wrap flex-shrink gap-9 justify-center py-5">
        {allUsers.length > 0 &&
          allUsers.map((item, key) => {
            return (
              <Card 
              item={item}
              key={key}
              handleDelete={handleDelete}
              handleDetails={props.handleDetails}
              />
            );
          })}
      </div>
    </div>
  );
}
