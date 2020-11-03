import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Report() {

  const [chamadados, setChamados] = useState({
    abertos: 15,
    em_andamento: 10,
    fechados: 59,
  });

  return <Container>
    <div id="report-id">
      <header id="nav">
        <div className="menublock">
          <h1 className="title">TMS</h1>
          <div className="menu">
            <Link to="/report">RELATÓRIOS</Link>
            <Link to='/usertickets'>CHAMADOS</Link>
          </div>
        </div>
      </header>
      <div className="content">
        <h2>Relatórios</h2>
        <div className="card">
          <div className="counter">
            <div className="chamado-content">
              <h4>Chamados Abertos</h4>
              <p>{ chamadados.abertos }</p>
            </div>
            <div className="chamado-content">
              <h4>Chamados Em Andamento</h4>
              <p>{ chamadados.abertos }</p>
            </div>
            <div className="chamado-content">
              <h4>Chamados Atendidos</h4>
              <p>{ chamadados.abertos }</p>
            </div>
            <div className="chamado-content">
              <h4>Equipamentos Frequentes</h4>
              <ul className="equipamentos-ul">
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
              </ul>
            </div>
            <div className="chamado-content">
              <h4>Salas Frequentes</h4>
              <ul className="salas-ul">
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
              </ul>
            </div>
            <div className="chamado-content">
              <h4>Usuários Frequentes</h4>
              <ul className="users-ul">
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>;
}