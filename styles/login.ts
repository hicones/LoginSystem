import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const BgContainer = styled.div`
  width: 960px;
  height: 100vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: 900px) {
    width: 100%;
    position: absolute;
    opacity: 0.2;
  }
`;

export const LoginContainer = styled.div`
  width: 960px;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
  }
`;

export const MainLogin = styled.div`
  max-width: 460px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Spacer = styled.span`
  width: 140px;
  display: flex;
  height: 0px;
  border: 1px solid var(--gray02);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;

  color: var(--gray02);
`;

export const FormLogin = styled.form`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 8px;
    color: var(--gray02);
    opacity: 0.5;
    text-align: center;
    font-size: 12px;
  }
`;

export const Redirect = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--gray02);

  a {
    color: var(--primary);
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--primary);
  border-radius: 3px;
  justify-content: center;
  border: none;
  color: #fefefe;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  margin-top: 16px;
`;

const spin = keyframes`
 0% {
   transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
 }
`;

export const Loading = styled.img`
  height: 40px;
  animation: ${spin} 0.5s infinite linear;
`;

export const LoginWithGoogle = styled.button`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  border-radius: 3px;
  background: var(--red-login);
  color: var(--white);

  span {
    margin-left: 10px;
  }
`;
