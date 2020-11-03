import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Report() {

  const [chamados, setChamados] = useState({});
  const [materiais, setMateriais] = useState({});
  const [classroom, setClassroom] = useState({});

  useEffect(() => {
    async function getTickets () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/reports/tickets`
      })
      setChamados(response.data);
    }

    async function getClassroom () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/reports/classroom`
      })
      setClassroom(response.data);
    }

    async function getMaterial () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/reports/material`
      })
      setMateriais(response.data);
    }


    getTickets();
    getClassroom();
    getMaterial();
  },[]);

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
              <p>{ chamados.ABERTO }</p>
            </div>
            <div className="chamado-content">
              <h4>Chamados Em Andamento</h4>
              <p>{ chamados.EM_ATENDIMENTO }</p>
            </div>
            <div className="chamado-content">
              <h4>Chamados Atendidos</h4>
              <p>{ chamados.FECHADO }</p>
            </div>
            <div className="chamado-content">
              <h4>Equipamentos Frequentes</h4>
              <ul className="equipamentos-ul">
                { Object.keys(materiais).map((key) => 
                  <li>Patrimônio: { key }</li>
                )}
              </ul>
            </div>
            <div className="chamado-content">
              <h4>Salas Frequentes</h4>
              <ul className="salas-ul">
              { Object.keys(classroom).map((key) => 
                  <li>{ key }</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>;
}