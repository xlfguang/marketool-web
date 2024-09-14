import styled from "styled-components";
import nodata from "@/assets/images/nodata.png";
export const VideoList = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 60px auto;
`;
export const VideoItemBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
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
export const VideoItemImgBox = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const VideoItemImg = styled.img`
  width: 313px;
  height: 556px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const PlayIcon = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
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
  height: calc(556px - 178px);
  padding: 22px 20px 50px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.94px;
  text-align: left;
  color: #a5a5a5;
  white-space: pre-line;
  overflow: auto;
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
  height: 557px;
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
  box-sizing: border-box;
`;
export const LoadingPrompts = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: 400;
  color: #130808;
`;
export const ParametersFormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ParametersFormCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ParametersFormCheck = styled.input`
  width: 22px;
  height: 22px;
  position: relative;
  margin-right: 8px;
  &::after {
    position: absolute;
    top: 0;
    color: #000;
    width: 22px;
    height: 22px;
    display: inline-block;
    visibility: visible;
    padding-left: 0px;
    text-align: center;
    content: " ";
    border-radius: 3px;
  }
  &:checked::after {
    content: "✓";
    color: #fff;
    font-size: 10px;
    line-height: 22px;
    background-color: #ff5334;
  }
`;
export const ParametersFormCheckLabel = styled.span<{
  active: boolean;
}>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.active ? "#ff5334" : "#A5A5A5")};
`;
export const ParametersFormButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const ParametersFormButton = styled.div<{
  type: "submit" | "button";
}>`
  padding: 10px 18px;
  border-radius: 6px;
  background: ${(props) => (props.type === "submit" ? "#ff5334" : "#fff")};
  border: 1px solid
    ${(props) => (props.type === "submit" ? "#ff5334" : "#A5A5A5")};
  color: ${(props) => (props.type === "submit" ? "#fff" : "#A5A5A5")};
  cursor: pointer;
`;

export const NoData = styled.div`
  width: 188px;
  height: 226px;
  background: url(${nodata}) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
`;
