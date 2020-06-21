/* eslint-disable react/prop-types */
import React, { useState } from "react";

import logo from "../../assets/logo.svg";
import api from "../../services/Api";

import "./styles.css";

export default function Login({ history }) {
  const [login, setLogin] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      login,
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu login do Github"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
