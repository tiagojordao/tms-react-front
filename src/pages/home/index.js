import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Cookies from 'js-cookie';

import axios from 'axios';

import { Container } from './styles';

export default function Home () {

  const [registration, setRegistration] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      const body = {
        registration,
        password,
        permissions: ['SERVIDOR']
      }
      const response = await axios ({
        method:'POST',
        url: 'http://localhost:8080/login',
        data: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      Cookies.set('@tms-token', response.data);

      const resp = await axios ({
        method: 'GET',
        url: 'http://localhost:8080/user/logged',
        headers: {
          'Authorization': response.data,
        }
      });
      Cookies.set('@tms-id', JSON.parse(resp.data).id);
      Cookies.set('@tms-name', JSON.parse(resp.data).name);
      window.location.replace("http://localhost:3000/report");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <div id="login-page">
        <div className="content">
          <header>
            <h1>Ticket Management System</h1>
          </header>
          <main>
            <fieldset>
              <legend>Login TMS</legend>
              <input type="text" placeholder="Registro" value={registration} onChange={e => setRegistration(e.target.value)}/>
              <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
              <div className="buttons">
                <Link id="login" onClick={() => handleLogin()}>ENTRAR</Link>
                <Link to='/register'>CADASTRO</Link>
              </div>
            </fieldset>
          </main>
        </div>
      </div>
    </Container>
  );
}