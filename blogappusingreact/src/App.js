import { useState } from "react";
import { InputForm } from "./components/inputForm";
import { ForgetPassword, LoginForm } from "./components/loginForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  function handleForm() {
    setIsLogin(!isLogin);
  }
  return (
    <>
      {/* <InputForm /> */}
      {isLogin ? (
        <LoginForm handleForm={handleForm} />
      ) : (
        <ForgetPassword handleForm={handleForm} />
      )}
    </>
  );
}

export default App;
