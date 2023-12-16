import React from 'react';
import Generating from '../assets/generating.png';
import styled from 'styled-components';
import theme from './../style/theme';
import LoadingBg from "../assets/loading_background.png";

const Loading  = () => {

	return (
		<Wrapper>
			<img alt='로딩 이미지'/>
			<CreateIngTitle />
		</Wrapper>
	);
}

export default Loading;

const Wrapper = styled.div`
  background: url(${LoadingBg}) no-repeat center;
  background-size: cover;
	height: 704px;
	padding-top: 50%;
	text-align: center;
`;

const CreateIngTitle = styled.h2`
	width: 222px;
	height: 23px;
  background: url(${Generating}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin: auto;
	margin-top: 20px;
`;