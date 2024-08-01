import { useState } from "react";
import { InputForm } from "./components/inputForm";
import { ForgetPassword, LoginForm } from "./components/loginForm";

function App() {
  const [isLogin, setIsLogin] = useState("Login");

  return (
    <>
      {/* <InputForm /> */}
      {isLogin === "Login" ? <LoginForm /> : <ForgetPassword />}
      <button
        onClick={() => {
          isLogin === "Login" ? setIsLogin("Forget") : setIsLogin("Login");
        }}
      >
        {isLogin === "Login" ? "Forget Password" : "Back To Login"}
      </button>
    </>
  );
}

export default App;
