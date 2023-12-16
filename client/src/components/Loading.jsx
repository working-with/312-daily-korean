import React from 'react';
import Generating from '../assets/generating.png';
import styled from 'styled-components';
import theme from './../style/theme';
import LoadingGif from "../assets/loading_character.gif";

const Loading  = () => {

	return (
		<Wrapper>
			<LoadingCharacterGif src={LoadingGif} alt='몽글 캐릭터 구름' />
			<CreateIngTitle />
		</Wrapper>
	);
}

export default Loading;

const Wrapper = styled.div`
  background: ${theme.colors.yellow2};
  background-size: cover;
	height: 704px;
	padding-top: 100px;
	text-align: center;
`;

const CreateIngTitle = styled.h2`
	width: 222px;
	height: 23px;
  background: url(${Generating}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin: auto;
`;

const LoadingCharacterGif = styled.img`
	width: 393px;
	height: 322px;
	margin: auto;
`