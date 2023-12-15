import React, { useState } from 'react';
import { Select, Tooltip } from 'antd';
import styled from 'styled-components';
import theme from './../style/theme';
import { InfoCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import Create from '../assets/create_button.png';
import DoCreate from '../assets/do_create.png';
import IngrendientText from "../assets/ingredient.png";

const Main = () => {
	const [textCount, setTextCountCount] = useState(0);

	const onTextChangeHandler = (e) => {
    setTextCountCount(e.target.value.length);
  };

	return (
		<MainBox>
			<TitleSection>
				<img alt='몽글 캐릭터 이미지' />
				<FlexBox>
					<Tooltip title="모든 정보를 입력하면 정확도가 올라가요!" trigger="click" overlayInnerStyle={{ maxWidth: '85px', fontSize: '7px'}} color= '#807A65'>
						<InfoCircleFilled style={{ fontSize: '17px', color: '#807A65' }} />
					</Tooltip>
					<DoCreateTitle>쿠션어를 제작해 보세요</DoCreateTitle>
				</FlexBox>
			</TitleSection>
			<InputSection>
				<Textarea onChange={onTextChangeHandler} maxLength={400} />
				<Yellow3P style={{ float: 'right' }}>{textCount}자 / 400자</Yellow3P>
			</InputSection>
			<SelectSection>
				<IngredientTitle>쿠션어 재료</IngredientTitle>
				<Yellow3P>쿠션어를 만들기 위해서는 아래 재료들이 필요해요</Yellow3P>
				<FlexBox style={{ marginTop: '15px', marginBottom: '25px' }}>
					<ExclamationCircleFilled style={{ fontSize: '16px', color: '#FF567E' }} />
					<WarnText>쿠션어를 만들기 위해서 재료가 모두 필요해요!</WarnText>
				</FlexBox>
				<SelectBox>
					<SelectCard
						defaultValue="대화 상대"
						//onChange={}
						options={[
							{
								value: '상사',
								label: '상사',
							},
							{
								value: '동료',
								label: '동료',
							},
							{
								value: '고객',
								label: '고객',
							}
						]}
					/>
					<SelectCard
						defaultValue="대화 채널"
						//onChange={}
						options={[
							{
								value: 'email',
								label: '이메일',
							},
							{
								value: 'messanger',
								label: '메신저',
							},
							{
								value: 'offline',
								label: '대면',
							}
						]}
					/>
					<SelectCard
						defaultValue="대화 목적"
						//onChange={}
						options={[
							{
								value: 'request',
								label: '요청하기',
							},
							{
								value: 'reject',
								label: '거절하기',
							},
							{
								value: 'quest',
								label: '질문하기',
							},
							{
								value: 'apologize',
								label: '사과하기',
							},
							{
								value: 'greet',
								label: '안부 인사하기',
							}
						]}
					/>
				</SelectBox>
			</SelectSection>
			<CreateBtn>쿠션어 만들기</CreateBtn>
		</MainBox>
	);
}

export default Main;

const MainBox = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
`;

const TitleSection = styled.section`
	margin-bottom: 30px;
	background: ${theme.colors.yellow2};
	padding: 0 16px;
	width: 100%;
	height: 258px;
`;

const InputSection = styled.section`
	width: 360px;
	height: 370px;
	padding: 10px;
	box-shadow: 0px 0px 5px 1px rgba(130, 82, 25, 0.3);
	border-radius: 20px;
`;

const Textarea = styled.textarea`
	border: none;
	width: 340px;
	height: 330px;
	resize: none;
	&:focus {
		outline: none;
	}
`;

const Yellow3P = styled.p`
	color: ${theme.colors.yellow3};
	font-size: 16px;
`;

const SelectSection = styled.section`
	text-align: center;
`;

const SelectBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const CreateBtn = styled.button`
	background: url(${Create}) no-repeat center;
	background-size: contain;
	text-indent: -9999px;
	display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  width: 272.49px;
  height: 153.58px;
  color: white;
  font-size: 18px;
`;

const DoCreateTitle = styled.h2`
	width: 222px;
	height: 23px;
  background: url(${DoCreate}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin-left: 10px;
`;

const IngredientTitle = styled.h2`
  width: 300px;
	height: 35px;
  background: url(${IngrendientText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin: 50px auto 15px;
`;

const WarnText = styled.p`
	color: #FF567E;
	font-size: 14px;
	font-weight: bold;
	margin-left: 10px;
`;

const SelectCard = styled(Select)`
	margin-bottom: 10px;
	width: 328px;
	height: 72px;
	padding: 10px 0px 10px 20px;
	.ant-select-arrow .anticon > svg {
		fill: ${theme.colors.brown3};
	}
	.ant-select-selector {
		border: 2px solid ${theme.colors.brown3} !important;
		font-size: 20px;
		border-radius: 13px;
	}
	.ant-select-selector:hover, .ant-select-selector:focus-within {
  	border: 2px solid ${theme.colors.yellow2} !important;
		box-shadow: 0 0 4px 2px rgba(255, 216, 46, 0.6);
	}
`;