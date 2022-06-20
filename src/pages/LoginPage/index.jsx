import React, { useRef, useState } from 'react';
import { validator } from '../../utils/util';
import {
  Wrapper,
  LoginContainer,
  Header,
  Logo,
  LoginForm,
  InputBox,
  Input,
  Button,
} from './style';

const LoginPage = () => {
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [validCheck, setValidCheck] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleChangeEmail = (e) => {
    const [emailValid, passwordValid] = validator(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setEmailCheck(true);
      setValidCheck(false);
      return;
    }

    if (emailValid) {
      setEmailCheck(true);
      if (passwordValid) {
        setValidCheck(true);
        return;
      }
      return;
    }

    setValidCheck(false);
    setEmailCheck(false);
  };

  const handleChangePassword = (e) => {
    const [emailValid, passwordValid] = validator(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setPasswordCheck(true);
      setValidCheck(false);
      return;
    }

    if (passwordValid) {
      setPasswordCheck(true);
      if (emailValid) {
        setValidCheck(true);
        return;
      }
      return;
    }

    setValidCheck(false);
    setPasswordCheck(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div>
        <LoginContainer>
          <Header>
            <Logo src="./images/logo.png" alt="logo" />
            <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
          </Header>
          <LoginForm onSubmit={handleSubmit}>
            <InputBox>
              <Input
                name="email"
                type="text"
                ref={emailRef}
                onChange={handleChangeEmail}
                isChecked={emailCheck}
                placeholder="이메일"
                required
              />
              <Input
                name="pasword"
                type="password"
                ref={passwordRef}
                onChange={handleChangePassword}
                isChecked={passwordCheck}
                placeholder="비밀번호"
                autoComplete="off"
                required
              />
            </InputBox>
            <Button isValid={validCheck} disabled={validCheck} type="submit">
              로그인
            </Button>
          </LoginForm>
        </LoginContainer>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
