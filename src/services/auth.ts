import { toast } from "react-toastify";
import { api } from "./api";

type ISignInRequest = {
  email?: string;
  password?: string;
};

function signInRequest({ email, password }: ISignInRequest) {
  return api.post("/auth/login", { email, password });
}

function recoverUserInformation() {
  return api.post("/auth/current");
}

async function registerUser(name: string, email: string, password: string) {
  return api.post("/auth/register", {
    name,
    password,
    email,
  });
}

export { signInRequest, recoverUserInformation, registerUser };
