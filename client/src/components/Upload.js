import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoodsList = styled.button`
  //버튼 이름 바꾸자
  display: inline-flex;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1.25rem;

  /* 색상 */
  background: #e50100;
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

export default function Upload({ userId }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const [uploadInfo, setuploadInfo] = useState({
    userId: userId,
    image: "",
    title: "",
    price: "",
    status: "",
    content: "",
  });

  const handleInputValue = (key) => (e) => {
    setuploadInfo({ ...uploadInfo, [key]: e.target.value });
  };

  const handleUpload = () => {
    if (
      uploadInfo.image === "" ||
      uploadInfo.title === "" ||
      uploadInfo.price === "" ||
      uploadInfo.status === "" ||
      uploadInfo.content === ""
    ) {
      alert("모든 항목을 입력해 주세요");
    } else {
      axios
        .post("http://localhost:4000/goods/upload", uploadInfo, {
          withCredentials: true,
        })
        .then((res) => alert("상품등록이 완료되었습니다!"))
        .then((res) => {
          navigate("/");
        });
    }
  };
  return (
    <div>
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
                  <div>
                    <div>
                      <span>상품사진</span>
                      <div></div>
                      <input
                        placeholder="사진업로드"
                        onChange={handleInputValue("image")}
                        type="file"
                      ></input>
                    </div>
                    <div>
                      <span>상품명</span>
                      <input
                        placeholder="상품이름을 적으세요."
                        onChange={handleInputValue("title")}
                      ></input>
                    </div>
                    <div>
                      <span>가격</span>
                      <input
                        placeholder="희망 가격을 적으세요."
                        onChange={handleInputValue("price")}
                      ></input>
                    </div>
                    <div>
                      <span>상태</span>
                      <input
                        placeholder="상,중,하 중 택1하세요."
                        onChange={handleInputValue("status")}
                      ></input>
                    </div>
                    <div>
                      <span>상세설명</span>
                      <input
                        placeholder="추가 설명을 작성하세요."
                        onChange={handleInputValue("content")}
                      ></input>
                    </div>
                    <button onClick={handleUpload}>상품등록</button>
                    <button>취소</button>
                  </div>
                </div>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </div>
    </div>
  );
}
