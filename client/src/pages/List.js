import Header1 from "../components/Header1";
import LogoImage from "../components/Logo";
import Goods from "../components/Goods";
import Nav from "../components/Nav";

const List = () => {
  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
      <Goods />
      {/* 이걸 컴포넌트로 할 필요가 있을까? */}
      <div></div>
    </div>
  );
};

export default List;
