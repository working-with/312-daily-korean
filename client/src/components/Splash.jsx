import React from 'react';
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

	return (<Wrapper>
	  <SplashImg src={SplashImage} />
	</Wrapper>
	);
}

export default Splash;