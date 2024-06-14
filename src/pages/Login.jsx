import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../forms/LoginForm";

export default function Login({ url }) {
  return (
    <>
      <LoginForm url={url} />
    </>
  );
}
