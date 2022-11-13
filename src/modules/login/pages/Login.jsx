import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global components
import FormInput from '../../../common/components/FormInput';
import PasswordInput from '../../../common/components/PasswordInput';
import { Button } from '../../../common/components/Button';
import { BorderedButton } from '../../../common/components/BorderedButton';

// Styled-components
import styled from 'styled-components';

// APIs
import { findUser } from '../../../common/api/login.controller';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleInputChangeValid(){
    if (email &&
        password){
          setIsDisabled(false);
    }
    else if (email == '' || password == '') {
      setIsDisabled(true);
    }
  }

  async function handleSignIn() {
    try {
      const user = await findUser(email, password)
      if(user) {
        navigate(`/welcome/${user.id}`, { replace: false });
      }
    } catch(e) {
      alert(e.message);
    }
  }

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
        <form onChange={handleInputChangeValid}>
          <FormInput
            callbackVal={setEmail} 
            label="Email"
            placeholder="Email"
            type="text"
          />
          <div className="toggle-pw-icon">
            <PasswordInput
              callbackVal={setPassword} 
              label="Password"
              placeholder="Password"
              type="password"
            />
          </div>
        </form>
        <Submission>
          {/* Login */}
          <Button disabled={isDisabled} onClick={handleSignIn}>Sign in</Button>
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

  width: 70%;
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