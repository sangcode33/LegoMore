import logo from "../images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = styled.img`
  height: 75px;
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
`;

function LogoImage() {
  const navigate = useNavigate();

  const goMainpage = () => {
    navigate("/");
  };

  return (
    <div>
      <Logo src={logo} alt="logo" onClick={goMainpage} />
    </div>
  );
}

export default LogoImage;
