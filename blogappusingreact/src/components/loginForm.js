import { useReducer, useState } from "react";

function userReducer(state, action) {}
function LoginForm(props) {
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const [users, dispatch] = useReducer(userReducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      user: {
        email: userCred.email,
        password: userCred.password,
      },
    });
  }
  function handleForgetPassword() {
    props.handleForm();
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          value={userCred.email}
          placeholder="email"
          onChange={(e) => ({
            email: e.target.value,
            password: userCred.password,
          })}
          required
        />
        <input
          value={userCred.password}
          placeholder="password"
          onChange={(e) => ({
            email: userCred.email,
            password: e.target.value,
          })}
          required
        />
        <button>Submit</button>
        <button onClick={(e) => handleForgetPassword(e)}>Forget Login</button>
      </form>
    </>
  );
}
function ForgetPassword(props) {
  function handleBackToLogin(e) {
    e.preventDefault();
    props.handleForm();
  }
  function handleForgetSubmit() {}
  return (
    <>
      <form onSubmit={(e) => handleForgetSubmit(e)}>
        <h1>Forget</h1>
        <input
          // value={userCred.email}
          placeholder="email"
          // onChange={(e) => ({
          //   email: e.target.value,
          //   password: userCred.password,
          // })}
          required
        />
        <button>Submit</button>
        <button onClick={(e) => handleBackToLogin(e)}>Back To Login</button>
      </form>
    </>
  );
}

export { LoginForm, ForgetPassword };
