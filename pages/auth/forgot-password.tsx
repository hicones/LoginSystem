import { useState } from "react";
import type { NextPage } from "next";
import * as S from "../../styles/login";
import { useRouter } from "next/router";

//Components
import Image from "next/image";
import GenericInput from "../../src/components/inputs";

//Images
import background from "../../src/assets/login_bg.png";
import logo from "../../src/assets/icons/valogo.svg";
import loadingW from "../../src/assets/icons/loading_white.svg";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();
  function moveToSignUp() {
    router.push("/auth/sign-up");
  }

  function moveToForgotPassword() {
    router.push("/auth/forgot-password");
  }

  return (
    <S.Container>
      <S.BgContainer style={{ backgroundImage: `url(${background.src})` }} />
      <S.LoginContainer>
        <S.MainLogin style={{ color: "var(--gray02)" }}>
          <h3 className="heading24">Forgot Password</h3>
          <p className="body16" style={{ width: "320px", textAlign: "center" }}>
            If you have forgotten your password, enter your email address so
            that we can reset your password.
          </p>
          <S.FormLogin>
            <GenericInput
              title="E-mail"
              value={email}
              setValue={setEmail}
              type="email"
              placeholder="E-mail"
            />
            <S.SubmitButton type="submit" style={{ marginTop: "30px" }}>
              Send E-mail
            </S.SubmitButton>
          </S.FormLogin>
        </S.MainLogin>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Home;
