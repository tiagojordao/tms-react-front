import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';

export default function Home () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
              <div className="buttons">
                <Link id="login" to='/report'>ENTRAR</Link>
                {/* <button className="login-button">ENTRAR</button> */}
                <Link to='/register'>CADASTRO</Link>
              </div>
            </fieldset>
          </main>
        </div>
      </div>
    </Container>
  );
}