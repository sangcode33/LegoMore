import logo from "../images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = styled.img`
  height: 90px;
  display: block;
  margin: 0 auto;
`;

export default function LogoImage() {
  const navigate = useNavigate();
  // history가 useNavigate로 변경

  const goMainpage = () => {
    navigate("/");
  };

  return (
    <div>
      <Logo src={logo} alt="logo" onClick={goMainpage} />
    </div>
  );
}
