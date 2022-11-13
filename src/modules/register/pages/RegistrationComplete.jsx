import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global components
import { Button } from '../../../common/components/Button';

// Styled-components
import styled from 'styled-components';

const RegistrationComplete = () => {

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  },[])

  function onClickBackToSignIn(){
    navigate("/", { replace: true });
  }
  
  return (
    <>
    { isLoading &&
      <Loader>
        <img src={"icons/checkmark.gif"} />
      </Loader> }
      <Container>
      <Content>
        <h1>Your application {"\n"} is submited successfully.</h1>
        <Submission>
          {/* Submit registration */}
          <Button onClick={onClickBackToSignIn}>Back to Sign in</Button>
        </Submission>
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
  grid-template-columns: 1fr 1fr;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  
  width: 80%;
  box-shadow: 0px 0px 40px 4px #d62e2e11;
  border-radius: 32px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .7) 0%, rgba(255, 255, 255, 0) 30%), url("https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/284197007_7370284209708115_8970274225645080429_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=bFjRtURaggMAX87Q9JX&tn=qZrMp7QPYKcvEpgJ&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfDVP81ResMmwYXiHKEHXVF-rTniMSzhbH-GKaFZ-FmIRg&oe=63754322");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 110% 0%;

  @media screen and (max-width: 1200px) {
    background-size: contain;
    background-position: 115% 0%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 32px 0px 0px 32px;

  height: 40vw;

  padding: 36px;

  h1 {
    color: var(--black);
    margin: 0;
    text-align: center;
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

export default RegistrationComplete;