import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserHome({ userData }) {
  const navigate = useNavigate()
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };


  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

    
      });
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <FontAwesomeIcon icon={faUserPlus} onClick={() => navigate("/updateUser", { state: userData })} />
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
