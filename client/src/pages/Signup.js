import Header1 from "../components/Header1";
import Nav from "../components/Nav";

const Signup = () => {
  return (
    <div>
      <Header1 />
      <Nav />
      <div className="signup-main">
        <div>회원가입</div>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <input placeholder="Nickname"></input>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default Signup;
