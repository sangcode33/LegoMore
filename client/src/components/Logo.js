import logo from "../images/logo.png";
import styled from "styled-components";

const Logo = styled.img`
  height: 90px;
  display: block;
  margin: 0 auto;
`;

export default function LogoImage() {
  return (
    <div>
      <Logo src={logo} alt="logo" />
    </div>
  );
}
