import { useEffect, useReducer, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      <form>
        <h1>Login</h1>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
}
function ForgetPassword() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);
  return (
    <>
      <form>
        <h1>Forget</h1>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Continue</button>
      </form>
    </>
  );
}

export { LoginForm, ForgetPassword };
