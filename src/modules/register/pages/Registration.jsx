import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Global components
import FormInput from '../../../common/components/FormInput';
import { Button } from '../../../common/components/Button';
import Checkbox from '../../../common/components/Checkbox';
import Dropdown from '../../../common/components/Dropdown';

// Styled-components
import {
  Container,
  Content,
  Submission,
  Headliner,
  Loader } from '../components/styles';

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
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Set loading screen
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  },[])

  // Reg-ex to validate the form an email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Check email after clicked register whether valid or not
  function handleCheckEmail() {
    // If not valid, then return nothing
    if(!isValidEmail(user.email)){
      alert("Email is invalid format!");
      return;
    } else {
      console.log(user);
      navigate("/sign-up-complete", { replace: false });
    }
  }

  // Handle clicking 'join now' button
  function onClickJoinNow(e) {
    e.preventDefault();
    handleCheckEmail();
  }
  
  return (
    <>
      { isLoading &&
        <Loader>
          <img src={"icons/checkmark.gif"} />
        </Loader> }
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
            <div className="grid">
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
            </div>
            <FormInput
              callbackVal={e => setUser(({ ...user, address: e }))} 
              label="Address"
              placeholder="Address"
              type="text"
            />
            <div className="grid">
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
            </div>
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
            <p>already have an account? <Link to="/">Log in</Link></p>

            {/* Login */}
            {/* <BorderedButton disabled={false} onClick={onClickSignIn}>Sign in</BorderedButton> */}
          </Submission>
        </Content>
        <Headliner>
          <h1>Join us today,</h1>
          <h3>to work & play everyday!</h3>
        </Headliner>
      </Container>
    </>
    
  );
}

export default Login;