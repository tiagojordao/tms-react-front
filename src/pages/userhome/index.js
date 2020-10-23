import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';

import axios from 'axios';

import { Container } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  aberto: {
    backgroundColor: '#4AC744',
    marginRight: 4,
  },
  andamento: {
    backgroundColor: '#F0A11B',
    marginRight: 4,
  },
  fechado: {
    backgroundColor: '#F02A1D',
    marginRight: 4,
  },
});

export default function Userhome() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [userid, setUserid] = useState();
  const [username, setUsername] = useState('');
  const [tickets, setTickets] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect (() => {
    setUserid(Cookies.get('@TMS-ID'));
  },[]);

  useEffect (() => {
    async function getUser () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/user/${userid}`
      })
      setUsername(response.data.name);
    }
    getUser();
  },[userid]);

  useEffect (() => {
    async function getTickets () {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:8080/ticket`,
      })
      setTickets(tickets => [...tickets, ...response.data]);
    }
    getTickets();
    
  },[]);

  const handleChange = index => e => {
    let array = [...comment];
    array[index] = [e.target.value];
    setComment(array);
  }

  async function sendComment (index, ticketid) {
    var body = {
      user: ticketid,
      comment: comment[index].toString(),
    }
    console.log(body)
    const response = await axios ({
      method: 'POST',
      url: `http://localhost:8080/ticket/${ticketid}/add-feedback`,
      data: body
    })
    if(response.status === 200){
      alert('Feedback Enviado!');
    }
  }

  async function handleAssing (index, ticketid) {
    var body = {
      ticketId: ticketid,
      attendantUserId: userid 
    }
    const response = await axios ({
      method: 'POST',
      url: `http://localhost:8080/ticket/${ticketid}/assign/${userid}`,
      data: body
    })
  }

  async function handleClose (index, ticketid){
    var body = {
      id: ticketid,
    }
    const response = await axios ({
      method: 'POST',
      url:`http://localhost:8080/ticket/${ticketid}/close`,
      data: body
    })
  }

  return (
    <Container>
      <div id="userhome-page">
        <header id="nav">
          <div className="content menublock">
            <h1 className="title">TMS</h1>
            <div className="menu">
              {/* <Link to='#'>CHAMADOS</Link> */}
            </div>
          </div>
        </header>
        <div className="content">
          <main>
              <h1>Olá {username}</h1>
            <div className="tickets">
              {/* {tickets && tickets.map(ticket => <div key={ticket.id}>{ticket.description}</div>)} */}
              {tickets && tickets.map((ticket, index) => 
                <Card id={ticket.id} className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      {bull}{ticket.task}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {ticket.description}
                    </Typography>
                    <Button className={classes.aberto} variant="body2" component="p">
                      ABERTO
                    </Button>
                    <Button className={classes.andamento} onClick={() => handleAssing(index, ticket.id)} variant="body2" component="p">
                      EM ANDAMENTO
                    </Button>
                    <Button className={classes.fechado} onClick={() => handleClose(index, ticket.id)} variant="body2" component="p">
                      FECHADO
                    </Button>
                  </CardContent>
                  <CardContent>
                    <TextField key={index} label="Comentário" variant="outlined" value={comment[index]} onChange={handleChange(index)} fullWidth/>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => sendComment(index, ticket.id)}>Enviar Comentário</Button>
                  </CardActions>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
}