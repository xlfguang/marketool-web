import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 68px);
  overflow: auto;
  background-color: rgb(244, 244, 244);
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export default Main;
