import myImage1 from "../images/background1.jpeg";
import myImage2 from "../images/background2.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderImage1 = styled.section`
  background-image: url(${myImage1});
  top: 50;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const HeaderImage2 = styled.section`
  background-image: url(${myImage2});
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Image1 = styled.div`
  position: absolute;
  text-align: center;
`;

const Image2 = styled.div`
  position: absolute;
  text-align: left;
`;
const Text2 = styled.h2`
  position: absolute;
  color: #040738;
  width: 500px;
  font-size: 40px;
  transform: translate(30%, 350%);
`;

const TextSmall = styled.div`
  color: #040738;
  width: 500px;
  font-size: 20px;
  transform: translate(1%, 100%);
`;

const CoolButton = styled.button`
  position: absolute;
  width: 10em;
  height: 3em;
  color: #eee;
  font-size: 20px;
  background-color: red;
  border-radius: 8px;
  border: solid 2px #eee;
  transform: translate(120%, 730%);
`;

export default function headerImage() {
  return (
    <div>
      <div>
        <Image1></Image1>

        <HeaderImage1 />
        <Image2>
          <Text2>
            이제 네고하지 마세요.
            <br />
            <TextSmall>
              실시간 올라오는 핫매물 클릭 한 번으로 절대 놓치지 마세요.
            </TextSmall>
          </Text2>
          <Link to="/users/login">
            <CoolButton>쿨거래</CoolButton>
          </Link>
        </Image2>
        <HeaderImage2 />
      </div>
    </div>
  );
}
