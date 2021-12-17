import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Nav = styled.div`
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
  //float: right;
`;

const SearchBar = styled.input`
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
  //float: right;
`;

const SearchButton = styled.button`
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
  margin-left: 10px;
`;

export default function nav() {
  return (
    <div>
      <Nav>
        <SearchBar placeholder="검색" />
        <SearchButton>
          <BsSearch />
        </SearchButton>
      </Nav>
    </div>
  );
}
