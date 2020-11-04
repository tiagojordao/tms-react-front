import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';

import axios from 'axios';

import { Container } from './styles';

import { MdDelete } from 'react-icons/md';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '100%',
    marginBottom: 16,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Userhome() {

  const [userid, setUserid] = useState();
  const [username, setUsername] = useState('');

  const [tickets, setTickets] = useState([]);
  const [comment, setComment] = useState([]);

  // Pegar ID nos Cookies e salvar no Estado
  useEffect (() => {
    setUserid(Cookies.get('@TMS-ID'));
  },[]);

  // Salvar nome do usuário no Estado
  useEffect (() => {
    async function getUser () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/user/${userid}`,
        headers: {
          'Authorization': Cookies.get('@tms-token')
        }
      })
      setUsername(response.data.name);
    }
    getUser();
  },[userid]);

  // Pegar todos os tickets
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (async () => {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/ticket`,
        headers: {
          'Authorization': Cookies.get('@tms-token')
        }
      })
      // setTickets(tickets => [...tickets, ...response.data]);
      setTickets(tickets => response.data);
  },[]);

  // Atualizar campo de comentário
  const handleChange = index => e => {
    let array = [...comment];
    array[index] = [e.target.value];
    setComment(array);
  }

  // Enviar Comentário
  async function sendComment (index, ticketid) {
    var body = {
      comment: comment[index].toString(),
    }
    console.log(body)
    const response = await axios ({
      method: 'POST',
      url: `http://localhost:8080/ticket/${ticketid}/add-feedback`,
      data: body,
      headers: {
        'Authorization': Cookies.get('@tms-token')
      }
    })
    if(response.status === 200){
      alert('Feedback Enviado!');
    }
  }

  // Trocar para Em Atendimento
  async function handleAssing (index, ticketid) {
    const response = await axios ({
      method: 'POST',
      url: `http://localhost:8080/ticket/${ticketid}/assign/`,
      headers: {
        'Authorization': Cookies.get('@tms-token'),
      }
    })
    console.log(response);
  }
  useEffect(() => {},[tickets]);

  // Fechar Ticket
  async function handleClose (index, ticketid){
    const response = await axios ({
      method: 'POST',
      url:`http://localhost:8080/ticket/${ticketid}/close`,
      headers: {
        'Authorization': Cookies.get('@tms-token')
      }
    })
  }

  return (
    <Container>
      <div id="userhome-page">
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
          <main>
              <h1>Olá {Cookies.get('@tms-name')}</h1>
            <div className="tickets">
              <div className="opentickets">
                <header>
                  <h2>Tickets Abertos</h2>
                </header>
                <ul className="open-ticket-ul">
                  {tickets && tickets.map((t, index) => t.status === "ABERTO" ? 
                    <li key={t.id}>
                      <div className="open-block">
                        <div className="content-box">
                          Tarefa: 
                          {t.task}<br/><br/>
                          Descrição: 
                          {t.description}
                        </div>
                        <span>
                          <button id="check" onClick={() => handleAssing(index, t.id)}>ATENDER</button>
                        </span>
                      </div>
                      <div className="textfield-box">
                        <TextField key={index} label="Comentário" variant="outlined" value={comment[index]} onChange={handleChange(index)} fullWidth/>
                        <Button size="small" onClick={() => sendComment(index, t.id)}>Enviar Comentário</Button>
                      </div>
                    </li>
                  : null)}
                </ul>
              </div>

              <div className="currenttickets">
                <header>
                  <h2>Tickets Em Atendimento</h2>
                </header>
                <ul className="current-ticket-ul">
                  {tickets && tickets.map((t, index) => t.status === "EM_ATENDIMENTO" ? 
                    <li key={t.id}>
                    <div className="current-block">
                      <div className="content-box">
                        Tarefa: 
                        {t.task}<br/><br/>
                        Descrição: 
                        {t.description}
                      </div>
                      <span>
                        <button id="check" onClick={() => handleClose(index, t.id)}>ENCERRAR</button>
                      </span>
                    </div>
                    <div className="textfield-box">
                      <TextField key={index} label="Comentário" variant="outlined" value={comment[index]} onChange={handleChange(index)} fullWidth/>
                      <Button size="small" onClick={() => sendComment(index, t.id)}>Enviar Comentário</Button>
                    </div>
                  </li>
                  : null)}
                </ul>
              </div>

              <div className="closedtickets">
                <header>
                  <h2>Tickets Encerrados</h2>
                </header>
                <ul className="closed-ticket-ul">
                  {tickets && tickets.map((t, index) => t.status === "FECHADO" ? 
                    <li key={t.id}>
                      <div className="closed-block">
                        <div className="content-box">
                          Tarefa: 
                          {t.task}<br/><br/>
                          Descrição: 
                          {t.description}
                        </div>
                        <span>
                          <button id="check" onClick={() => {}}><MdDelete size={16}/></button>
                        </span>
                      </div>
                      {/* <div className="textfield-box">
                        <TextField key={index} label="Comentário" variant="outlined" value={comment[index]} onChange={handleChange(index)} fullWidth/>
                        <Button size="small" onClick={() => sendComment(index, t.id)}>Enviar Comentário</Button>
                      </div> */}
                    </li>
                  : null)}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
}