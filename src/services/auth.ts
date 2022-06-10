import { toast } from "react-toastify";
import { api } from "./api";
import { auth } from "./firebaseSetup";

type ISignInRequest = {
  email: string;
  password: string;
};

function signInRequest({ email, password }: ISignInRequest) {
  return auth.signInWithEmailAndPassword(email, password);
}

function resetPassword(email: string) {
  return auth.sendPasswordResetEmail(email);
}

function recoverUserInformation() {
  return auth.currentUser;
}

async function registerUser(name: string, email: string, password: string) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export { signInRequest, recoverUserInformation, registerUser, resetPassword };
