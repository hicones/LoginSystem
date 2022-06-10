import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import * as S from "../../styles/login";
import { useRouter } from "next/router";

//Components
import Image from "next/image";
import GenericInput from "../../src/components/inputs";
import { resetPassword } from "../../src/services/auth";

//Images
import background from "../../src/assets/login_bg.png";
import logo from "../../src/assets/icons/valogo.svg";
import loadingW from "../../src/assets/icons/loading_white.svg";
import { toast } from "react-toastify";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  function moveToSignUp() {
    router.push("/auth/sign-up");
  }

  function moveToForgotPassword() {
    router.push("/auth/forgot-password");
  }

  function handleResetPassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    resetPassword(email)
      .then(() => {
        toast("Created !", {
          type: "success",
        });

        router.push("/auth/login");
      })
      .catch((err) => {
        console.log("Error on register", err);
        toast("Error on register", {
          type: "error",
        });
      })
      .finally(() => setLoading(false));
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
          <S.FormLogin onSubmit={handleResetPassword}>
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
