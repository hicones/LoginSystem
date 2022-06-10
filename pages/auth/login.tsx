import { FormEvent, useContext, useState } from "react";
import type { NextPage } from "next";
import * as S from "../../styles/login";
import { useRouter } from "next/router";

//Components
import Image from "next/image";
import { motion } from "framer-motion";
import GenericInput from "../../src/components/inputs";
import { firebase, auth } from "../../src/services/firebaseSetup";
import { AuthContext } from "../../src/context/AuthContext";

//Images
import background from "../../src/assets/login_bg.png";
import logo from "../../src/assets/icons/valogo.svg";
import loadingW from "../../src/assets/icons/loading_white.svg";
import googleLogo from "../../src/assets/google.svg";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // Sign In

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    signIn({ email, password: senha }).finally(() => setLoading(false));
  }

  const handleGoogleLogin = async () => {
    signInWithGoogle();
  };

  //navigation
  const router = useRouter();
  function moveToSignUp() {
    router.push("/auth/sign-up");
  }

  function moveToForgotPassword() {
    router.push("/auth/forgot-password");
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <S.Container>
      <S.BgContainer style={{ backgroundImage: `url(${background.src})` }} />
      <motion.main variants={container} initial="hidden" animate="show">
        <S.LoginContainer>
          <motion.div variants={item}>
            <S.MainLogin>
              <h1 className="heading24">Sign In</h1>
              <S.LoginWithGoogle type="button" onClick={handleGoogleLogin}>
                <Image src={googleLogo} alt="google" />
                <span>Sign in with Google</span>
              </S.LoginWithGoogle>

              <div style={{ display: "flex", alignItems: "center" }}>
                <S.Spacer />
                <span
                  style={{
                    margin: "20px 10px",
                    color: "var(--gray02)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  or
                </span>
                <S.Spacer />
              </div>
              <S.FormLogin onSubmit={(e) => handleLogin(e)}>
                <GenericInput
                  title="E-mail"
                  value={email}
                  setValue={setEmail}
                  type="email"
                  placeholder="E-mail"
                />
                <GenericInput
                  title="Password"
                  value={senha}
                  setValue={setSenha}
                  type="password"
                  placeholder="Password"
                />
                <S.Redirect>
                  <p className="body14">
                    New User?{" "}
                    <a className="body14" onClick={moveToSignUp}>
                      SignUp
                    </a>
                  </p>
                  <a className="body14" onClick={moveToForgotPassword}>
                    Forgot Password
                  </a>
                </S.Redirect>
                <S.SubmitButton type="submit">
                  {loading ? <S.Loading src={loadingW.src} /> : "login"}
                </S.SubmitButton>
              </S.FormLogin>
            </S.MainLogin>
          </motion.div>
        </S.LoginContainer>
      </motion.main>
    </S.Container>
  );
};

export default Login;
