import styled from 'styled-components';

export const Container = styled.div`
  #userhome-page {
    height: 100vh;
  }
  .content {
    width: 100%;
    height: calc(100% - 80px);
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #userhome-page #nav {
    width: 100%;
    padding: 16px;
    background-color: #333;
  }

  #userhome-page header .menublock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;

    color: #e9e9e9;
  }

  #userhome-page header .menublock .menu a{
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

  #userhome-page .content main {
    width: 100%;
  }

  #userhome-page .content main h1 {
    margin: 32px 0 32px 0;
    color: #333;
    text-align: left;
  }

  #userhome-page .content main .tickets {
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 32px;
  }

  .tickets {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 32px;
  }

  .opentickets {
    padding: 0 15px;
    height: 100%;
    flex: 0 0 400px;

    header {
      background: none;
      display: flex;
      align-items: center;
      height: 40px;
    }

    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
      background: none;
      color: #333;
    }

    .open-ticket-ul {
      margin-top: 30px;
      list-style: none;

      li {
        width: 100%;
        position: relative;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 8px;
        padding: 16px;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
        /* border-top: 20px solid rgba(230, 236, 245, 0.4); */
        border-top: 20px solid rgba(0, 255, 0, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
      
        .open-block {
        width: 100%;
        position: relative;
        padding: 16px 0;
        display: flex;
        flex-direction: row;
        align-items: center;

          span button {
            height: 32px;
            border: none;
            border-radius: 8px;
            padding: 4px 8px;
            background: rgba(240,120,24,1);
            color: #fff;

            :hover {
              background: rgba(240,120,24,0.5);
            }
          }
        }
        .content-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .textfield-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }

  .currenttickets {
    padding: 0 15px;
    height: 100%;
    flex: 0 0 400px;

    header {
      background: none;
      display: flex;
      align-items: center;
      height: 40px;
    }
    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
      background: none;
      color: #333;
    }

    ul {
      margin-top: 30px;
      list-style: none;

      li {
        width: 100%;
        position: relative;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 8px;
        padding: 16px;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
        /* border-top: 20px solid rgba(230, 236, 245, 0.4); */
        border-top: 20px solid rgba(230, 200, 0, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;

        .current-block {
          width: 100%;
          position: relative;
          padding: 16px 0;
          display: flex;
          flex-direction: row;
          align-items: center;

          span button {
            height: 32px;
            border: none;
            border-radius: 8px;
            padding: 4px 8px;
            background: rgba(255,0,0,1);
            color: #fff;

            :hover {
              background: rgba(255,0,0,0.5);
            }
          }
        }

        .content-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .textfield-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }

  .closedtickets {
    padding: 0 15px;
    height: 100%;
    flex: 0 0 400px;

    header {
      background: none;
      display: flex;
      align-items: center;
      height: 40px;
    }
    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
      background: none;
      color: #333;
    }

    .closed-ticket-ul {
      margin-top: 30px;
      list-style: none;
      opacity: 0.5;

      li {
        width: 100%;
        position: relative;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 8px;
        padding: 16px;
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
        border-top: 20px solid rgba(230, 236, 245, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;

        .closed-block {
          width: 100%;
          position: relative;
          padding: 16px 0;
          display: flex;
          flex-direction: row;
          align-items: center;

          span button {
            height: 32px;
            border: none;
            border-radius: 8px;
            padding: 4px 8px;
            background: rgba(255,0,0,1);
            color: #fff;

            :hover {
              background: rgba(255,0,0,0.5);
            }
          }
        }

        .content-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .textfield-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
`;
