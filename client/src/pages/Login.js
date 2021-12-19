import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="login-main">
        <div>로그인</div>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button>로그인</button>
      </div>

      <button>Kakao</button>

      <Footer />
    </div>
  );
};

export default Login;
