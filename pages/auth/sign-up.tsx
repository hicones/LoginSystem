import { FormEvent, useState } from "react";
import * as S from "../../styles/login";

//next
import type { NextPage } from "next";
import { useRouter } from "next/router";

//Components
import Image from "next/image";
import GenericInput from "../../src/components/inputs";

//Images
import background from "../../src/assets/login_bg.png";
import logo from "../../src/assets/icons/valogo.svg";
import loadingW from "../../src/assets/icons/loading_white.svg";
import { registerUser } from "../../src/services/auth";
import { toast } from "react-toastify";
import googleLogo from "../../src/assets/google.svg";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [loading, setLoading] = useState(false);

  //navigation
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    registerUser(username, email, senha, confirmarSenha)
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

  const responseGoogle = (res: any) => {
    console.log(res);
  };

  const errorResponseGoogle = (res: any) => {
    console.log(res);
  };

  return (
    <S.Container>
      <S.BgContainer style={{ backgroundImage: `url(${background.src})` }} />
      <S.LoginContainer>
        <S.MainLogin>
          <h1 className="heading24">Sign Up</h1>
          <S.LoginWithGoogle type="button">
            <Image src={googleLogo} alt="google" />
            <span>Sign up with Google</span>
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
          <S.FormLogin
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <GenericInput
              title="Username"
              value={username}
              setValue={setUsername}
              type="text"
              placeholder="Username"
            />

            <span className="body14">
              Your Username will be displayed in the Platform and it doesn’t
              need to be your real name
            </span>

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

            <GenericInput
              title="Confirm Password"
              value={confirmarSenha}
              setValue={setConfirmarSenha}
              type="password"
              placeholder="Confirm Password"
            />
            <span className="body14">
              The password must contain at least one uppercase, one lowercase
              letter and one symbol.
            </span>

            <S.SubmitButton type="submit">
              {loading ? <S.Loading src={loadingW.src} /> : "Register"}
            </S.SubmitButton>
          </S.FormLogin>
        </S.MainLogin>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Home;
