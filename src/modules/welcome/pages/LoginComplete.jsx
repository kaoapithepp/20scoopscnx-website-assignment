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

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = UserModel[id];
    setUser(userInfo);
  },[])

  function handleLogOut(e) {
    e.preventDefault();

    navigate("/", { replace: true });
  }

  
  return (
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
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  width: 70%;
  padding: 16px;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  border-radius: 32px;
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