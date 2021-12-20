import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import LogoImage from "../components/Logo";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
      <hr />
      <div className="signup-main">
        <h1>회원가입</h1>
        <div className="signup-email">
          <input type="email" placeholder="email"></input>
        </div>
        <div className="signup-password">
          <input type="password" placeholder="password"></input>
        </div>
        <div className="signup-nickname">
          <input type="text" placeholder="Nickname"></input>
        </div>
        <div className="btn">
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
