import React from "react";
import styled from "styled-components";
import theme from "../style/theme";
import { Button, Image, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import CompleteText from "../assets/complete.png";
import BeforeText from "../assets/before_complete.png";
import AfterText from "../assets/after_complete.png";
import Copy from "../assets/copy_button.png";
import Edit from "../assets/edit_button.png";
import New from "../assets/new_button.png";
import Unlike from "../assets/unlike_icon.png";
import Like from "../assets/like_icon.png";
import UnlikeActive from "../assets/unlike_active_icon.png";
import LikeActive from "../assets/like_active_icon.png";
import IngrendientText from "../assets/ingredient.png";
import Partner from "../assets/partner.png";
import Channel from "../assets/channel.png";
import Purpose from "../assets/purpose.png";





const Wrapper = styled.main`
  background: ${theme.colors.yellow2};
  padding: 0 16px;
`;

const Section = styled.section`
  background: ${theme.colors.yellow2};
`;

const CharactorWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Charactor = styled(Image)`
  width: 115px !important;
  border-radius: 50%;
`;

const CompleteTitle = styled.h2`
  width: 222px;
	height: 23px;
  background: url(${CompleteText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin-bottom: 56px;
`;

const BeforeComplete = styled.h2`
  width: 159px;
  height: 21px;
  background: url(${BeforeText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin-top: 35.5px;
`;

const AfterComplete = styled.h2`
  width: 205px;
  height: 21px;
  background: url(${AfterText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin-top: 56px;
`;

const TextAreaText = styled.p`
  position: absolute;
  font-size: 16px;
  color: green;
  right: 16px;
  bottom: 8px;
`;

const TextAreaWrapper = styled.div`
  position: relative;
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 20px;
    background: white;
	border-radius: 20px 20px 0 0;
	margin-top: 24px;
	box-shadow: 0px 0px 16.600000381469727px 0px #23150024;

}
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 42px;
    background: white;
    border-radius: 0 0 20px 20px;
		box-shadow: 0px 0px 16.600000381469727px 0px #23150024;

  }
`;

const TextAreaBox = styled(TextArea)`
  height: 312px !important;
  box-sizing: border-box;
  padding: 0 14px;
  border: none;
  border-radius: 0;
  resize: none !important;
  box-shadow: none;
  &:where(.css-dev-only-do-not-override-p7e5j5).ant-input:focus {
    border: none;
    box-shadow: none;
  }
`;

const CopyButton = styled.button`
position: absolute;
	background: url(${Copy});
	border: none;
	width: 13px;
	height: 15px;
	background-size: contain;
	text-indent: -9999px;
	bottom: 8px;
	right: 16px;
`;

const LikeWrapper = styled.div`
  display: flex;
  justify-content: end;
	margin-top: 24px;
`;

const UnlikeButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
	height: 48px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 16px;
	border: none;
	color: ${theme.colors.brown2};
	background: ${theme.colors.brown1};
	margin-right: 16px;
	&::before{
		content:'';
		width: 24px;
		height: 24px;
		display: inline-block;
		background: url(${Unlike}) no-repeat center;
		background-size: contain;
	};
	&:hover, &:active{
		color: #666666;
		font-weight: 700;
		background: ${theme.colors.white};

		&::before{
			content:'';
			width: 24px;
			height: 24px;
			display: inline-block;
			background: url(${UnlikeActive}) no-repeat center;
			background-size: contain;
		};
		};
	};
`;

const LikeButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
	height: 48px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 16px;
	border: none;
	color: ${theme.colors.brown4};
	background: ${theme.colors.brown2};
	font-weight: 700;
	&::before{
		content:'';
		width: 24px;
		height: 24px;
		display: inline-block;
		background: url(${Like}) no-repeat center;
		background-size: contain;
	};
	&:hover, &:active{
		color: ${theme.colors.yellow2};
		background: ${theme.colors.brown4};
		&::before{
			content:'';
			width: 24px;
			height: 24px;
			display: inline-block;
			background: url(${LikeActive}) no-repeat center;
			background-size: contain;
		};
	};
`;

const IngredientTitle = styled.h2`
  width: 222px;
	height: 23px;
  background: url(${IngrendientText}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
	margin: 56px auto 24px;
`;

const IngredientUl = styled.ul`
	margin-bottom: 76px;
`;

const IngredientList = styled.li`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
background: ${theme.colors.white};
border-radius: 48px;
height: 55px;
margin-bottom: 8px;
padding: 16px 24px;
`;

const IngredientLabelPartner = styled.label`
display: block;
width: 101px;
height: 23px;
 background: url(${Partner}) no-repeat center;
 background-size: contain;
 text-indent: -9999px;
`;

const IngredientLabelChannel = styled.label`
display: block;
width: 101px;
height: 23px;
 background: url(${Channel}) no-repeat center;
 background-size: contain;
 text-indent: -9999px;
`;

const IngredientLabelPurpose = styled.label`
display: block;
width: 101px;
height: 23px;
 background: url(${Purpose}) no-repeat center;
 background-size: contain;
 text-indent: -9999px;
`;

const IngredientInput = styled.input`
font-size: 18px;
text-align: center;
border: none;
background: ${theme.colors.white};
color: ${theme.colors.brown4};
`;

const MoveWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const MoveButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  width: 272.49px;
  height: 153.58px;
  color: white;
  font-size: 18px;

  &:nth-child(1) {
    background: url(${Edit}) no-repeat center;
		background-size: contain;
		text-indent: -9999px;
		margin-bottom: 29.89px;
  };
  &:nth-child(2) {
    background: url(${New}) no-repeat center;
		background-size: contain;
		text-indent: -9999px;
		margin-bottom: 43.94px;
  };
`;

const Complete = () => {
  const complete_text = document.querySelector(".complete_text"); 
  const text_value = complete_text.value;

	const handleShare = async () => {

		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Title to share', // 공유될 제목
					text: text_value, // 공유될 텍스트
				});
				console.log('공유 완료!');
			} catch (error) {
				console.error('공유 실패:', error);
			}
		} else {
			console.log('Web Share API를 지원하지 않는 브라우저입니다.');
		}
	}

  return (
    <Wrapper>
      <Section>
        <CharactorWrapper>
          <Charactor src="https://url.kr/wja2qz" />
          <div>
            <CompleteTitle>쿠션어 제작이 완료되었어요!</CompleteTitle>
          </div>
        </CharactorWrapper>
      </Section>
      <Section>
        <BeforeComplete>쿠션어 적용 전이에요.</BeforeComplete>
        <TextAreaWrapper>
          <TextAreaBox />
          <TextAreaText>000자/000자</TextAreaText>
        </TextAreaWrapper>
      </Section>
      <Section>
        <AfterComplete>쿠션어 제작이 완료되었어요.</AfterComplete>
        <TextAreaWrapper>
          <TextAreaBox className="complete_text" value="test" />
					<CopyButton onClick={handleShare}>복사</CopyButton>
        </TextAreaWrapper>
        <LikeWrapper>
          <UnlikeButton>부족해요</UnlikeButton>
          <LikeButton>마음에 들어요</LikeButton>
        </LikeWrapper>
      </Section>
      <Section>
        <Section>
					<IngredientTitle>쿠션어 재료</IngredientTitle>
          <IngredientUl>
            <IngredientList>
							<IngredientLabelPartner  htmlFor="partner">대화 상대</IngredientLabelPartner>
							<IngredientInput type="text" name="partner" id="partner" value="상사" disabled />
            </IngredientList>
						<IngredientList>
						<IngredientLabelChannel htmlFor="channel">대화 채널</IngredientLabelChannel>
							<IngredientInput type="text" name="channel" id="channel" value="메일" disabled />
							</IngredientList>
            <IngredientList>
						<IngredientLabelPurpose htmlFor="purpose">대화 목적</IngredientLabelPurpose>
							<IngredientInput type="text" name="purpose" id="purpose" value="거절하기" disabled />
            </IngredientList>
          </IngredientUl>
        </Section>
      </Section>
      <Section>
        <MoveWrapper>
          <MoveButton>쿠션어 수정하기</MoveButton>
          <MoveButton>새로운 쿠션어 만들기</MoveButton>
        </MoveWrapper>
      </Section>
    </Wrapper>
  );
};

export default Complete;
