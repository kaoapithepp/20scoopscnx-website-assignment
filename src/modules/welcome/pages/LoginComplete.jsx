import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
 
// Global Components
import { BorderedButton } from '../../../common/components/BorderedButton';
 
// Styles
import styled from 'styled-components';
 
// Models
import { UserModel } from '../../../common/model/user.model';
 
const LoginComplete = () => {
 
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
 
  // Get 'id' parameter from path
  const { id } = useParams();
 
  const navigate = useNavigate();
 
  // Set loading screen
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  },[])
 
  // Set user information before displaying
  useEffect(() => {
    const userInfo = UserModel[id];
    setUser(userInfo);
  },[])
 
  // Handle Log out function
  function handleLogOut(e) {
    e.preventDefault();
    navigate("/", { replace: true });
  }
 
  return (
    <>
      { isLoading &&
        <Loader>
          <img src={"/icons/checkmark.gif"} />
        </Loader>
      }
      <Container>
        <Profile>
          <img src={user.img}/>
        </Profile>
        <Content>
          <h1>{user.first_name} {user.last_name}</h1>
          <h3>{user.email}</h3>
          <p>{user.address}, {user.postcode}</p>
          <p>Tel. {user.tel_no}</p>
          { user.toc ? <span>User agrees with Terms and Condition</span>
            : <span>User does not agree with Terms and Condition</span>
          }
          <BorderedButton onClick={handleLogOut}>Log out</BorderedButton>
        </Content>
      </Container>
    </>
  )
}
 
const Loader = styled.div`
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
 
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
 
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
 
  width: 50%;
  padding: 16px;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  border-radius: 32px;
 
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;
 
const Profile = styled.div`
 
  padding: 24px;
 
  display: flex;
  align-items: center;
  justify-content: center;
 
  img {
    width: 256px;
    height: 256px;
    border-radius: 360px;
    object-fit: cover;
  }
`;
 
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 24px;
 
  * {
    margin: 10px;
  }
 
  span {
    color: var(--pale-black);
    font-size: 12px;
  }
`;
 
export default LoginComplete;