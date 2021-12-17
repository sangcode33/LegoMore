import myImage1 from "../images/background1.jpeg";
import myImage2 from "../images/background2.jpeg";
import styled from "styled-components";

const HeaderImage1 = styled.section`
  background-image: url(${myImage1});
  //position: absolute;
  top: 50;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

const HeaderImage2 = styled.section`
  background-image: url(${myImage2});
  /* position: absolute; */
  top: 10000;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

export default function headerImage() {
  return (
    <div>
      <HeaderImage1 />
      <HeaderImage2 />
    </div>
  );
}
