import styled from 'styled-components';

export const Container = styled.div`
  #userhome-page {
    height: 100vh;
  }
  .content {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #userhome-page header {
    width: 100%;
    padding: 16px;
    background-color: #e9e9e9;
  }

  #userhome-page header .menublock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    color: #333;
  }

  #userhome-page header .menublock .menu a{
    text-decoration: none;
    font-weight: bold;
    margin-right: 16px;
    height: 100%;
    width: 100%;
    color: #333;
    transition: 0.3s;
  }

  #userhome-page header .menublock .menu a:hover {
    color: #fff;
  }

  #userhome-page .content main {
    width: 100%;
  }

  #userhome-page .content main h1 {
    margin: 32px 0 32px 0;
    color: #e9e8e0;
    text-align: left;
  }

  #userhome-page .content main .tickets {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
