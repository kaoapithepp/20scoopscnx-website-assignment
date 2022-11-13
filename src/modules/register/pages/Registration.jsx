import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global components
import FormInput from '../../../common/components/FormInput';
import PasswordInput from '../../../common/components/PasswordInput';
import { Button } from '../../../common/components/Button';
import { BorderedButton } from '../../../common/components/BorderedButton';

// Styled-components
import styled from 'styled-components';
import Checkbox from '../../../common/components/Checkbox';
import Dropdown from '../../../common/components/Dropdown';

const Login = () => {

  const [user, setUser] = useState({
    gender: '',
    first_name: '',
    last_name: '',
    address: '',
    postcode: 0,
    email: '',
    tel_no: 0,
    toc: false
  });
  // const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleCheckEmail() {
    if(!isValidEmail(user.email)){
      alert("Email is invalid format!");
      return;
    }
  }

  function onClickJoinNow(e) {
    e.preventDefault();

    handleCheckEmail();

    console.log(user);

    navigate("/sign-up-complete", { replace: false });
  }

  function onClickSignIn(e) {
    e.preventDefault();

    navigate("/", { replace: false });
  }
  
  return (
    <Container>
      <Content>
        <h1>Sign up</h1>
        <form>
          <Dropdown
            callbackVal={e => setUser({ ...user, gender: e })}
            label="Gender"
            placeholder="Gender"
            data={["Male", "Female"]}
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, first_name: e }))} 
            label="First Name"
            placeholder="First Name"
            type="text"
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, last_name: e }))} 
            label="Last Name"
            placeholder="Last Name"
            type="text"
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, address: e }))} 
            label="Address"
            placeholder="Address"
            type="text"
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, postcode: e }))} 
            label="Postcode"
            placeholder="Postcode"
            type="number"
            maxChar="5"
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, email: e }))} 
            label="Email"
            placeholder="Email"
            type="email"
          />
          <FormInput
            callbackVal={e => setUser(({ ...user, tel_no: e }))} 
            label="Telephone Number"
            placeholder="Telephone Number"
            type="number"
            maxChar="10"
          />

          <div className="terms-service">
            <Checkbox callbackVal={e => setUser(({ ...user, toc: e }))}/>
            <p>You have accepted our Terms and Condition</p>
          </div>

        </form>

        <Submission>
          {/* Submit registration */}
          <Button disabled={!user.toc} onClick={onClickJoinNow}>Join now!</Button>
          <p>already have an account?</p>

          {/* Login */}
          <BorderedButton disabled={false} onClick={onClickSignIn}>Sign in</BorderedButton>
        </Submission>
      </Content>
      <Headliner>
        <div className="black-gradient" />
        <h1>Join us today,</h1>
        <h3>To work & play everyday!</h3>
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