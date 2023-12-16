import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from "styled-components";
import theme from "../style/theme";
import { Image } from "antd";
import SplashImage from "../assets/splash.png";

const Wrapper = styled.main`
  background: ${theme.colors.yellow2};
	width: 100%;
	height: 100vh;
	oveflow: hidden;
`;

const SplashImg = styled.img`
 width: 100%;
  background: ${theme.colors.yellow2};
`;

const Splash  = () => {
	const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 일정 시간(예: 3초) 후에 화면 전환을 위해 setTimeout 사용
    const timeout = setTimeout(() => {
      setShowSplash(false); // 스플래시 이미지를 숨기고
    }, 2500); // 3초 후에 숨김

    return () => clearTimeout(timeout); // 컴포넌트가 언마운트될 때 timeout 클리어
  }, []);

	return (<Wrapper>
		{showSplash && (
	    <SplashImg src={SplashImage} />
		)}
		{!showSplash && <Navigate to="/main" />} {/* 다음 화면으로 전환 */}
	</Wrapper>
	);
}

export default Splash;