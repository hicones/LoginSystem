import { useState } from "react";
import type { NextPage } from "next";
import * as S from "../../styles/login";
import { useRouter } from "next/router";

//Components
import Image from "next/image";
import GenericInput from "../../src/components/inputs";

//Images
import background from "../../src/assets/login_bg.png";
import logo from "../../src/assets/genezys_logo_blue.png";
import googleLogo from "../../src/assets/google.svg";

const Home: NextPage = () => {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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
          <h3 className="heading24">New Password</h3>
          <S.FormLogin>
            <GenericInput
              title="Password"
              value={senha}
              setValue={setSenha}
              type="password"
              placeholder="Password"
            />
            <GenericInput
              title="Confirm Password"
              value={confirmarSenha}
              setValue={setConfirmarSenha}
              type="password"
              placeholder="Confirm Password"
            />
            <S.SubmitButton type="submit" style={{ marginTop: "30px" }}>
              Confirm
            </S.SubmitButton>
          </S.FormLogin>
        </S.MainLogin>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Home;
