import { useContext } from "react";
import authContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(authContext);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>ohooo çoktan</p> : <p>hayır</p>}
      <button onClick={login}>giriş yap</button>
    </div>
  );
}

export default Auth;
