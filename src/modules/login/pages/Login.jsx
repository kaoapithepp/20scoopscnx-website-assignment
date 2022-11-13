import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global components
import FormInput from '../../../common/components/FormInput';
import { Button } from '../../../common/components/Button';
import { BorderedButton } from '../../../common/components/BorderedButton';

// Styled-components
import styled from 'styled-components';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function onClickSignUp(e) {
    e.preventDefault();

    navigate("/sign-up", { replace: false });
  }
  
  return (
    <Container>
      <Header>
        <img src='/logo/company-logo.png' width="120px"/>
        <h1>Crew's System</h1>
      </Header>
      <Content>
        <form>
          <FormInput
            callbackVal={setUsername} 
            label="Username"
            placeholder="Username"
            type="text"
          />
          <FormInput
            callbackVal={setPassword} 
            label="Password"
            placeholder="Password"
            type="password"
          />
        </form>
        <Submission>
          {/* Login */}
          <Button disabled={false}>Sign in</Button>
          <p>or you do not have an account?</p>
          {/* Register */}
          <BorderedButton disabled={false} onClick={onClickSignUp}>Sign up</BorderedButton>
        </Submission>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  width: 70vh;
  padding: 16px;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  /* border: 1px solid var(--primary-color); */
  border-radius: 32px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 24px;

  h1 {
    text-align: center;
    color: var(--primary-color);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 24px;

  form {
    width: 30vw;
  }
`;

const Submission = styled.div`
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
`;

export default Login;