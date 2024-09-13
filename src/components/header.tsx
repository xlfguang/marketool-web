import React from "react";
import styled from "styled-components";
import logo from "@/assets/images/AiMarketool.png";
import conversion from "@/assets/images/conversion-icon.png";
const HeaderBox = styled.div`
  height: 68px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
const LogoBox = styled.img`
  width: 162px;
`;
const ConversionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;
const ConversionButton = styled.div`
  cursor: pointer;
  width: 126px;
  height: 46px;
  border-radius: 6px;
  font-size: 16px;
  background: #ff5334;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Header() {
  return (
    <HeaderBox>
      <LogoBox src={logo} alt="logo" />
      <RightBox>
        <ConversionButton>
          <ConversionIcon src={conversion} alt="conversion" />
          经典页面
        </ConversionButton>
        <HeaderImg src="https://avatars.githubusercontent.com/u/52910710?v=4" />
      </RightBox>
    </HeaderBox>
  );
}

export default Header;
