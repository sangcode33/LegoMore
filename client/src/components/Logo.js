import logo from "../images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; //useHistory가 v6부터 바뀜.

const Logo = styled.img`
  height: 90px;
  display: block;
  margin: 0 auto;
`;

export default function LogoImage() {
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
