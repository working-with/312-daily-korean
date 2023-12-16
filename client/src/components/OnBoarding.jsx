import React from 'react';
import Header from './Header';
import styled from "styled-components";
import theme from "../style/theme";
import OnboardingText from "../assets/onboarding.png";
import AfterText from "../assets/after_complete.png";
import One from "../assets/circle_first.png";
import Two from "../assets/circle_second.png";
import Three from "../assets/circle_third.png";

const Wrapper = styled.main`
  background: ${theme.colors.white}
  background-size: cover;
`;

const Section = styled.section`
  padding: 0 16px;
`;

const OnboardingTitleWrapper = styled.div`
`;

const OnboardingTitle = styled.h2`
  width: 209px;
  height: 23px;
  background: url(${OnboardingText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin-bottom: 11px;
`;

const OnboardingDetail = styled.h3`
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.5px;
	line-height: 25.6px;
`;

const CompleteTitle = styled.h2`
width: 222px;
height: 23px;
background: url(${AfterText}) no-repeat center;
background-size: contain;
text-indent: -9999px;
margin-bottom: 11px;
`;

const FirstDesc = styled.p`
display: flex;
flex-flow: row nowrap;
align-items: center;
	font-size: 16px;
	letter-spacing: -.4px;
	line-height: 25.6px;

	&::before{
		display: inline-block;
		content: "";
		width: 24px;
		height: 24px;
		background: url(${One}) no-repeat center;
		background-size: contain;
		margin-right: 8px;
	}
`;

const SecondDesc = styled.p`
display: flex;
flex-flow: row nowrap;
align-items: center;
	font-size: 16px;
	letter-spacing: -.4px;
	line-height: 25.6px;
	&::before{
		display: inline-block;
		content: "";
		width: 24px;
		height: 24px;
		background: url(${Two}) no-repeat center;
		background-size: contain;
		margin-right: 8px;
	}
`;

const ThirdDesc = styled.p`
display: flex;
flex-flow: row nowrap;
align-items: top;
	font-size: 16px;
	letter-spacing: -.4px;
	line-height: 25.6px;
	&::before{
		display: inline-block;
		content: "";
		width: 24px;
		height: 24px;
		background: url(${Three}) no-repeat center;
		background-size: contain;
		margin-right: 8px;
	}
`;


const OnBoarding  = () => {

	return (<Wrapper>
      <Header />
			<Section style={{	marginTop: '59px'}}>
			<OnboardingTitleWrapper>
				<OnboardingTitle>쿠션어 번역기 몽글 사용법</OnboardingTitle>
				<OnboardingDetail>회사에서 실수할까봐 두려운 순간, <b style={{fontSize: '16px'}}>몽글</b>로 여러분의 <br/>말에 쿠션을 넣어 보세요.</OnboardingDetail>
			</OnboardingTitleWrapper>
			</Section>
			<Section>
				<ul>
					<li>
						<img src=""/>
						<FirstDesc>쿠션이 필요한 문구를 작성하세요!</FirstDesc>					
					</li>
					<li>
					<img src=""/>
						<SecondDesc>주어진 상황을 간단하게 알려주세요.</SecondDesc>					
					</li>
				</ul>
			</Section>
			<Section>
				<CompleteTitle>쿠션어 적용이 완료되었어요</CompleteTitle>
				<img src="" />
				<ThirdDesc>쿠션을 만들어 부드럽고<br/>정중한 표현으로 다듬어 줄게요!</ThirdDesc>
			</Section>
	</Wrapper>
	);
}

export default OnBoarding;