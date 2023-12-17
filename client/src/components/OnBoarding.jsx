import React from 'react';
import Header from './Header';
import styled from "styled-components";
import theme from "../style/theme";
import OnboardingBg from "../assets/onboarding.png";

const Wrapper = styled.main`
  background: ${theme.colors.white}
  background-size: cover;
`

const OnboardingWrapper = styled.img`
width: 100%;
`

const OnBoarding  = () => {

	return (<Wrapper>
      <Header />
			<OnboardingWrapper src={OnboardingBg} />
	</Wrapper>
	);
}

export default OnBoarding;