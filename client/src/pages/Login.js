import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
      <hr />
      <div className="login-main">
        <div className="login-title">로그인</div>

        <div className="login-email">
          <input type="text" placeholder="email"></input>
        </div>
        <div className="login-password">
          <input type="password" placeholder="password"></input>
        </div>

        <div className="btn">
          <button>로그인</button>
        </div>

        <hr />
        <div className="sns-title">SNS 간편로그인</div>
        <div className="btn-kakao">
          <button> 카카오 로그인 →</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
