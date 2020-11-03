import styled from 'styled-components';

export const Container = styled.div`
  #report-id {
    height: 100%;
  }
  #report-id #nav {
    width: 100%;
    padding: 16px;
    background-color: #333;
  }
  #report-id header .menublock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;

    color: #e9e9e9;
  }
  #report-id header .menublock .menu a{
    text-decoration: none;
    font-weight: bold;
    margin-right: 16px;
    height: 100%;
    width: 100%;
    color: #fff;
    transition: 0.5s;
    :hover {
      color: #999;
      text-decoration: underline;
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 200px);
    max-width: 1100px;
    
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  .content h2 {
    margin-top: 32px;
  }

  .content .card {
    background: #fff;
    border-radius: 5px;
    margin-top: 32px;

    display: flex;

    width: 100%;
    height: 100%;

    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
  }

  .content .card .counter {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    height: 100%;
    width: 100%;

    h4 {
      margin: 0 12px;
    }

    .chamado-content {

      border-left: 1px solid rgba(0,0,0,0.15);
      :first-child {
        border-left: none;
      }

      margin-top: 32px;

      display: flex;
      align-items: center;
      flex-direction: column;

      height: 80%;

      p {
        margin-top: 16px;
        font-size: 24px;
      }

      ul {
        list-style: none;

        li {
          margin-top: 16px;
        }
      }
    }
  }
`;
