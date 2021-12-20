import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 900px;
  height: 600px;

  > div.close_btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;

const GoodsList = styled.button`
  //버튼 이름 바꾸자
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: white;
  &:hover {
    color: #ffcf00;
  }
  &:active {
    font: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Headerpart = styled.header`
  margin: 20px;
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Headerpart>
        <Link to="/goods/goods">
          <GoodsList>goodslist</GoodsList>
        </Link>
        <Link to="/users/login">
          <GoodsList>Login</GoodsList>
        </Link>
        <Link to="/users/signup">
          <GoodsList>Sign Up</GoodsList>
        </Link>
        <div>
          <GoodsList onClick={openModalHandler}>상품등록</GoodsList>
          {isOpen === true ? (
            <ModalBackdrop onClick={openModalHandler}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <span onClick={openModalHandler} className="close-btn">
                  &times;
                </span>
                <div className="desc">
                  <div>
                    {/* <GoodsImg src={mockupimage} alt="" /> */}
                    {/* src를 props로 가져와야*/}
                    <div>
                      <div>
                        <span>상품명</span>
                        <input placeholder="상품이름을 적으세요."></input>
                      </div>
                      <div>
                        <span>가격</span>
                        <input placeholder="희망 가격을 적으세요."></input>
                      </div>
                      <div>
                        <span>상태</span>
                        <input placeholder="상,중,하 중 택1하세요."></input>
                      </div>
                      <div>
                        <span>상세설명</span>
                        <input placeholder="추가 설명을 작성하세요."></input>
                      </div>
                      <button>상품등록</button>
                      <button>취소</button>
                    </div>
                  </div>
                </div>
              </ModalView>
            </ModalBackdrop>
          ) : null}

          {/* <Link to="/goods/upload">
          <GoodsList>상품등록</GoodsList>
        </Link> */}
        </div>
      </Headerpart>
    </div>
  );
}
