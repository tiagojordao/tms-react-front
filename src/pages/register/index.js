import React, { useState } from 'react';

import Cookies from 'js-cookie';

import axios from 'axios';

import { Container } from './styles';

export default function Register() {

  const [name, setName] = useState('');
  const [registration, setRegistration] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [role, ] = useState('ADMIN');

  async function handleSubmit () {
    var body = {
      name,
      registration,
      password,
      role
    };
    console.log(body);
    await axios({
        method: 'POST',
        url: 'http://localhost:8080/user',
        data: body
    }).then (response => {
        if (response.status === 200){
            Cookies.set('@TMS-ID', response.data.id);
            console.log(response);
            alert(`Cadastro Realizado!`);
            window.location.replace("http://localhost:3000/usertickets");
        }
    })
  }

  return (
  <Container>
    <div id="register-page">
      <div className="content">
        <header>
          <h1>Ticket Management System</h1>
        </header>
        <main>
          <fieldset>
            <legend>Cadastrar</legend>
            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Matricula" value={registration} onChange={e => setRegistration(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="Repita a Senha" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>CADASTRAR</button>
          </fieldset>
        </main>
      </div>
    </div>
  </Container>
  );
}