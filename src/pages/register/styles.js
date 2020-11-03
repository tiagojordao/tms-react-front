import styled from 'styled-components';

export const Container = styled.div`
  #register-page {
  height: 100vh;
  background: #333;
  }

  #register-page .content {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #register-page .content header {
    margin: 48px 0 0;
  }

  #register-page .content header h1 {
    color: #fff;
    padding: 32px 16px;
  }

  #register-page .content main {
    background-color: rgba(255,255,255,0.15);
    border-radius: 10px;
    max-width: 500px;
    align-self: flex-end;
  }

  #register-page .content main fieldset {
      border: 0;
      min-inline-size: auto;
      margin: 64px 64px 80px 64px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }

  #register-page .content main fieldset legend {
      width: 100%;
      margin-bottom: 40px;
      color: #fff;
      font-size: 18px;


      display: flex;
      justify-content: center;
      align-items: center;
  }

  #register-page .content main fieldset input {
    width: 100%;
    padding: 10px 160px 10px 8px;
    margin-bottom: 16px;
    background-color: #e9e5e3;
    border: 0;
    border-radius: 3px;
  }

  #register-page .content main fieldset button {
    width: 100%;
    padding: 13px 0px 13px 0px;
    background-color: #118AF2;
    color: #fff;
    border: 0;
    border-radius: 3px;
  }

  #register-page .content main fieldset button:hover {
    background-color: rgba(17,138,242,0.5);
  }
`;
