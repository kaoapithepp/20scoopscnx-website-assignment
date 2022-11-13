import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global components
import FormInput from '../../../common/components/FormInput';
import PasswordInput from '../../../common/components/PasswordInput';
import { Button } from '../../../common/components/Button';
import { BorderedButton } from '../../../common/components/BorderedButton';

// Styled-components
import styled from 'styled-components';
import Checkbox from '../../../common/components/Checkbox';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function onClickSignIn(e) {
    e.preventDefault();

    navigate("/", { replace: false });
  }
  
  return (
    <Container>
      <Content>
        <h1>Sign up</h1>
        <form>
          <FormInput
            callbackVal={setUsername} 
            label="First Name"
            placeholder="First Name"
            type="text"
          />
          <FormInput
            callbackVal={setUsername} 
            label="Last Name"
            placeholder="Last Name"
            type="text"
          />
          <FormInput
            callbackVal={setUsername} 
            label="Address"
            placeholder="Address"
            type="text"
          />
          <FormInput
            callbackVal={setUsername} 
            label="Postcode"
            placeholder="Postcode"
            type="text"
          />
          <FormInput
            callbackVal={setUsername} 
            label="Email"
            placeholder="Email"
            type="text"
          />
          <FormInput
            callbackVal={setUsername} 
            label="Telephone Number"
            placeholder="Telephone Number"
            type="text"
          />
          
        </form>

        <div className="terms-service">
          <Checkbox />
          <p>You have accepted our term and condition</p>
        </div>

        <Submission>
          {/* Submit registration */}
          <Button disabled={false}>Join now!</Button>
          <p>already have an account?</p>

          {/* Login */}
          <BorderedButton disabled={false} onClick={onClickSignIn}>Sign in</BorderedButton>
        </Submission>
      </Content>
      <Headliner>
        <div className="black-gradient" />
        <h1>Join us today</h1>
        <h3>to work & play everyday!</h3>
      </Headliner>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  
  width: 80%;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  border-radius: 32px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 50%), url("https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/169144796_5653728141363739_6810537645620664203_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecf8710uwA4AX-a4DrU&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAYEnUmXbNpBDlabZhuPdPRi5NELC8muRxVWqeWt5EjbQ&oe=6374B145");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 0%;

  @media screen and (max-width: 1200px) {
    background-size: cover;
    background-position: 30% 50%;
  }
`;

const Headliner = styled.div`
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

const Content = styled.div`
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
    width: 30vw;
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