import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="signup-main">
        <div>회원가입</div>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <input placeholder="Nicname"></input>
        <button>회원가입</button>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
