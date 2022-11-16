import styled from 'styled-components';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  animation: fadeout 2s;

  @keyframes fadeout {
    0% {opacity: 1;}
    75% {opacity: 1;}
    100% {opacity: 0;}
  }

  img {
    width: 100px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  
  width: 80%;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  border-radius: 32px;
  /* background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 50%), url("https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/169144796_5653728141363739_6810537645620664203_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecf8710uwA4AX-a4DrU&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAYEnUmXbNpBDlabZhuPdPRi5NELC8muRxVWqeWt5EjbQ&oe=6374B145"); */
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 50%), url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 0%;

  @media screen and (max-width: 1200px) {
    background-size: cover;
    background-position: 30% 50%;
  }
`;

export const Headliner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 24px;

  h1 {
    margin: 0;
    color: var(--white);
  }

  h3 {
    margin: 0;
    color: var(--white);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: var(--white);
  border-radius: 32px 0px 0px 32px;

  padding: 36px;

  h1 {
    color: var(--primary-color);
    margin: 0;
  }

  form {
    width: inherit;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .terms-service {
    display: flex;
    align-items: center;

    p {
      margin-left: 4px;
      color: var(--pale-black);
      font-size: 12px;
    }
  }
`;

export const Submission = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 8px;

  * {
    margin: 4px 0px;
  }

  p {
    color: var(--pale-black);
    font-size: 12px;
  }

  a {
    color: var(--primary-color);
  }
`;