import styled from "styled-components";

export const VideoList = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 60px auto;
`;
export const VideoItemBox = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #130808;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const VideoItemContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const VideoItemContent = styled.div`
  background: #fff;
  width: calc(100% - 122px);
  border-radius: 16px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const VideoItemImg = styled.img`
  width: 313px;
  height: 698px;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const VideoItemContentRight = styled.div``;
export const Introduce = styled.div`
  padding: 22px 20px 50px;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: #130808;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;
export const Line = styled.div`
  width: calc(100% - 40px);
  height: 2px;
  background: #f4f4f4;
  margin: 0 auto;
`;
export const VideoItemDescription = styled.div`
  margin-bottom: 34px;
  @media (max-width: 768px) {
    margin-bottom: 17px;
  }
`;
export const VideoItemCaption = styled.div``;
export const Caption = styled.div`
  padding: 22px 20px 50px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.94px;
  text-align: left;
  color: #a5a5a5;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const VideoItemOperate = styled.div`
  width: 106px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
export const OperateButtonBox = styled.div<{
  active?: boolean;
}>`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  /* 如果aactive 就设置  position: relative 和 z-index: 3
   */

  ${(props) =>
    props.active &&
    `
    position: relative;
    z-index: 4;
  `}

  @media (max-width: 768px) {
    font-size: 14px;
    height: 40px;
    width: 22%;
  }
`;
export const OperateButtonImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000070;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
export const ParametersForm = styled.div`
  position: absolute;
  background: #fff;
  width: 1008px;
  height: 539px;
  border-radius: 10px;
  padding: 24px;
  z-index: 3;
  top: 0px;
  bottom: 0px;
  right: 122px;
  display: flex;
  flex-direction: column;
  cursor: auto;
  @media (max-width: 1008px) {
    width: calc(100vw - 40px);
    padding: 12px;
    gap: 20px 20px;
  }
`;

export const ParametersInputBox = styled.div`
  width: 100%;
  margin-bottom: 44px;
`;
export const ParametersInputTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #130808;
  margin-bottom: 10px;
`;
export const MyInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
`;
export const MyTextArea = styled.textarea`
  width: 100%;
  height: 71px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  resize: none;
`;
