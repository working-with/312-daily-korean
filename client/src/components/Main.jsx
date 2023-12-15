import React, { useState } from 'react';
import axios from 'axios';
import { Select, Tooltip, message } from 'antd';
import styled from 'styled-components';
import theme from './../style/theme';
import { InfoCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import Create from '../assets/create_button.png';
import DoCreate from '../assets/do_create.png';
import IngrendientText from "../assets/ingredient.png";

const Main = () => {
	const { Option } = Select;
	const [isFull, setIsFull] = useState(true);
	const [textCount, setTextCount] = useState(0);
	const [content, setContent] = useState('');
	const [partner, setPartner] = useState('대화 상대');
	const [channel, setChannel] = useState('대화 채널');
	const [purpose, setPurpose] = useState('대화 목적');

	const handleSubmitClick = () => {
		if (
				!content ||
				!partner ||
				!channel ||
				!purpose
		) {
				setIsFull(false);
				return;
		}
				
		axios
				.post('/api/v1/situation', 
					{
						inputText: content,
						partner: partner,
						method: channel,
						purpose: purpose
					},
					{
						headers: {
								'Content-Type': 'application/json',
								// userId: // 로그인을 안 하는데 userid를 어떻게 가져오지?
						}
					}
				)
				.then((result) => {
						if (result.status === 200) {
							message.success('쿠션어 만들기 ');
						}
				})
				.catch((error) => {
						message.error('쿠션어 만들기 실패');
				});
		};

		const SelectedPartnerHandler = (value) => {
			setPartner(value);
			console.log(value);
		};
		const SelectedChannelHandler = (value) => {
			setChannel(value);
		};
		const SelectedPurposeHandler = (value) => {
			setPurpose(value);
		};

	const onTextChangeHandler = (e) => {
    setTextCount(e.target.value.length);
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
				{!isFull && 
					<FlexBox style={{ marginTop: '15px', marginBottom: '25px' }}>
						<ExclamationCircleFilled style={{ fontSize: '16px', color: '#FF567E' }} />
						<WarnText>쿠션어를 만들기 위해서 재료가 모두 필요해요!</WarnText>
					</FlexBox>
				}
				<SelectBox>
					<SelectCard
						value={partner} 
						onChange={SelectedPartnerHandler}
					>
						<Option value="boss">상사</Option>
						<Option value="coworker">동료</Option>
						<Option value="client">고객</Option>
					</SelectCard>
					<SelectCard
						value={channel} 
						onChange={SelectedChannelHandler}
					>
						<Option value="email">이메일</Option>
						<Option value="messanger">메신저</Option>
						<Option value="offline">대면</Option>
					</SelectCard>
					<SelectCard
						value={purpose} 
						onChange={SelectedPurposeHandler}
					>
						<Option value="request">요청하기</Option>
						<Option value="reject">거절하기</Option>
						<Option value="quest">질문하기</Option>
						<Option value="apologize">사과하기</Option>
						<Option value="greet">안부 인사하기</Option>
					</SelectCard>
				</SelectBox>
			</SelectSection>
			<CreateBtn onClick={handleSubmitClick}>쿠션어 만들기</CreateBtn>
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
	margin-top: 15px;
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
	margin-top: 6px;
	margin-bottom: 3px;
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