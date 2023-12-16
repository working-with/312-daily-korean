import React from "react";
import styled from "styled-components";
import shareIcon from "../assets/share_icon.png";
import theme from "../style/theme";
import MongleLogo from "../assets/mongle_logo.png";


const Wrapper = styled.header`
  height: 62px;
  background: ${theme.colors.yellow2};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div``;

const Logo = styled.a`
  display: block;
  width: 46px;
  height: 46px;
  background: url(${MongleLogo}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuShare = styled.li`
  display: block;
  list-style: none;
`;

const MenuShareBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${shareIcon});
  background-size: cover;
  border: none;
  text-indent: -9999px;
  cursor: pointer;
`;

const BackButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  margin-left: -8px;
`;

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "쿠션어 제작기 - 몽글", // 공유될 제목
        url: "https://localhost:3000/", // 공유될 URL
      });
      console.log("공유 완료!");
    } catch (error) {
      console.error("공유 실패:", error);
    }
  } else {
    console.log("Web Share API를 지원하지 않는 브라우저입니다.");
  }
};

const Header = () => {


  const pathname = window.location.pathname;

  if(pathname.includes('onboarding')) return (
    <Wrapper style={{background:'white'}}>
      <BackButton><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_835_819)">
<path d="M14.7054 17.2946C15.0947 16.9053 15.095 16.2743 14.7062 15.8846L11.2507 12.4217C11.0182 12.1886 11.0182 11.8114 11.2507 11.5783L14.7062 8.11538C15.095 7.72569 15.0947 7.09466 14.7054 6.70538C14.3158 6.31581 13.6842 6.31581 13.2946 6.70538L8.73333 11.2667C8.32832 11.6717 8.32832 12.3283 8.73333 12.7333L13.2946 17.2946C13.6842 17.6842 14.3158 17.6842 14.7054 17.2946Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_835_819">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  </BackButton>
  </Wrapper>
  );

  return (
    <Wrapper>
    <LogoWrapper className="header_logo">
      <Logo href="/main">logo</Logo>
    </LogoWrapper>
    <Menu className="header_menu">
      <MenuUl>
        <MenuShare>
          <MenuShareBtn onClick={handleShare}>공유</MenuShareBtn>
        </MenuShare>
      </MenuUl>
    </Menu>
  </Wrapper>
  )

};

export default Header;
