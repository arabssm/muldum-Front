import styled from '@emotion/styled'
import emailIcon from '../../assets/login/email.svg'
import passwordIcon from '../../assets/login/password.svg'
import '../../fonts/font.css'

export default function Login() {
  return (
    <King>
      <Container>
        <MainText>로그인</MainText>
        <InputWrapper>
          <InputField>
            <Icon src={emailIcon} alt="email icon" />
            <Input placeholder="e-mail" />
          </InputField>

          <InputField>
            <Icon src={passwordIcon} alt="password icon" />
            <Input type="password" placeholder="password" />
          </InputField>
        </InputWrapper>
        <FindPassword>
          <Textpass>Find Password</Textpass>
        </FindPassword>
        <Final>
          Log in
        </Final>
      </Container>
    </King>
  )
}

const King = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FAFAFA;
  height: 100vh;
  position: fixed;
`
const Container = styled.div`
  width: 60%;
  height: 100vh;
  background-color: #FFFFFF;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainText = styled.h1`
margin-top: 150px;
  font-family: 'Paperlogy', sans-serif;
  font-size: 48px;

`
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`

const InputField = styled.div`
  position: relative;
  width: 50%;
`

const Icon = styled.img`
  position: absolute;
  left: 5%;
  top: 51%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 60px;   
  border: 1px solid #D1D1D1;
  border-radius: 8px;
  font-size: 16px;
  font-weight:100;
  box-sizing: border-box;
` 
const FindPassword=styled.div`
  width: 50%;
  height: 50px;
  margin-top:10px;
  position: relative;
`;
const Textpass =styled.p`
  position: absolute;
  left: 80%;
  color:#707070;
`;
const Final=styled.button`
  width: 50%;
  height: 50px;
  background: var(--primary-color, #FF9B62);
  color: #FFFFFF;
  border: none;
  font-size: large;
  border-radius: 8px;
  margin-top: 60px;
`;