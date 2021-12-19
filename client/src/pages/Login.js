import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";

const Login = () => {
  return (
    <div>
      <Header1 />
      <Nav />
      <LogoImage />
      <div className="login-main">
        <div>로그인</div>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button>로그인</button>
      </div>
      <button>Kakao</button>
    </div>
  );
};

export default Login;
