import React from 'react';
import MongleLogo from "../assets/mongle_logo.png";
import styled from 'styled-components';
import theme from './../style/theme';

const Footer  = () => {

  const handleFeedbackClick = () => {
    window.open('https://forms.gle/6vMHR36qHkHzgUbE9', '_blank');
  };

	return (
    <FooterWrap>
      <Logo />
      <BoldText>쿠션처럼 부드러운 표현으로 바꾸어드려요!</BoldText>
      <BoldText>쿠션어 제작 서비스</BoldText>
      <BoldText onClick={handleFeedbackClick} style={{ marginTop: '25px', cursor: 'pointer' }}>의견 제안하기</BoldText>
      <HorizontalLine />
      <MediumText>PM: 하승희</MediumText>
      <MediumText>Designer: 안지선, 이승훈</MediumText>
      <MediumText>FE: 노소희, 황주화</MediumText>
      <MediumText>BE: 남혜민</MediumText>
      <CopyrightText>Copyright 데일리코리안 @2023.12 @Beside Project</CopyrightText>
    </FooterWrap>
	);
}

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
	height: 415px;
  padding: 42px 24px 42px 24px;
  margin-top: 70px;
  background: ${theme.colors.black};
`;

const Logo = styled.h1`
  display: block;
  width: 55px;
  height: 50px;
  margin-bottom: 20px;
  background: url(${MongleLogo}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
`;

const BoldText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  padding: 5px;
  color: ${theme.colors.gray1};
`;

const MediumText = styled.p`
  font-size: 16px;
  margin-top: 5px;
  padding: 5px;
  color: ${theme.colors.gray1};
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin-top: 35px;
  padding: 5px;
  color: ${theme.colors.gray1};
`;

const HorizontalLine = styled.hr`
  width: 335px;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${theme.colors.gray1};
`;