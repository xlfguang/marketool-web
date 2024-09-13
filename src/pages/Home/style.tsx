import styled from "styled-components";

export const MainLogo = styled.img`
  width: 248px;
  margin: 60px auto 22px;
  display: block;
`;
export const CreateVideoBox = styled.div`
  width: 510px;
  padding: 18px;
  border-radius: 10px;
  background: #ffffff;
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1008px) {
    width: calc(100vw - 40px);
  }
`;

export const CreateVideoInputBox = styled.div<{ icon: string }>`
  width: 100%;
  margin-bottom: 18px;
  height: 54px;
  border-radius: 6px;
  background: #f4f4f4;
  border: none;
  position: relative;

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background: url(${(props) => props.icon}) no-repeat;
    background-size: 100%;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CreateVideoInput = styled.input`
  width: calc(100% - 54px);
  height: 100%;
  border: none;
  padding-left: 48px;
  font-size: 16px;
  color: #333;
  background: none;
  outline: none;
  &::placeholder {
    color: #a5a5a5;
  }
`;

export const UpLoadButton = styled(CreateVideoInputBox)`
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 48px;
`;

export const CreateVideoButton = styled.button`
  width: 100%;
  margin-bottom: 18px;
  height: 54px;
  border-radius: 6px;
  background: #ff5334;
  border: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
export const VideoList = styled.div`
  width: 100%;
  max-width: 1008px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 32px;
`;
