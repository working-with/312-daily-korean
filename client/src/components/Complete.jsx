import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import theme from "../style/theme";
import axios from "axios"; // 서버 요청을 위한 axios import
import { Link } from "react-router-dom";
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
import CompleteBg from "../assets/complete_background.png";
import CompleteCharactor from "../assets/complete_character.gif";


const Wrapper = styled.main`
  background: url(${CompleteBg}) no-repeat center;
  background-size: cover;
`;

const Section = styled.section`
  padding: 0 16px;
`;

const CharactorWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Charactor = styled(Image)`
  width: 372px  !important;
`;

const CompleteTitleWrapper = styled.div`
  &::before{
    content: "";
    display: block;
    width: 157px;
    height: 37.45px;
    background: ${theme.colors.yellow3};
    opacity: 20%;
    border-radius: 82%;
    margin: -65px auto 10.56px;
  }
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
  color: ${theme.colors.yellow3};
  right: 16px;
  bottom: 12px;
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
  background: url(${Copy}) no-repeat center;
  background-size: contain;
  border: none;
  width: 13px;
  height: 15px;
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
  padding: 0 24px;
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
  padding: 0 24px;
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(${Like}) no-repeat center;
    background-size: contain;
  }
  &:hover,
  &:active {
    color: ${theme.colors.yellow2};
    background: ${theme.colors.brown4};
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      display: inline-block;
      background: url(${LikeActive}) no-repeat center;
      background-size: contain;
    }
  }
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
  }
  &:nth-child(2) {
    background: url(${New}) no-repeat center;
    background-size: contain;
    text-indent: -9999px;
    margin-bottom: 43.94px;
  }
`;

const Complete = () => {
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);
  const [text, setText] = useState(""); // 텍스트 상태
  const [completeText, setCompleteText] = useState("복사 테스트"); // 결과 텍스트 상태
  const [partner, setPartner] = useState("상대");
  const [channel, setChannel] = useState("채널");
  const [purpose, setPurpose] = useState("목적");

  /* 프롬프트 설정 값 받아와서 보여주기 */
  useEffect(() => {
    axios
      .get("url")
      .then((response) => {
        // 서버로부터 받은 데이터를 상태값으로 설정
        setPartner(response.data.partner);
        setChannel(response.data.channel);
        setPurpose(response.data.purpose);
        setCompleteText(response.data.completeText);
      })
      .catch((error) => {
        console.error("서버로부터 데이터를 가져오는데 실패했습니다:", error);
      });
  }, []);

  /*텍스트 갯수 업데이트 */
  const maxLength = 400; // 최대 글자 수
  const handleTextChange = (event) => {
    const newText = event.target.value; // 입력된 텍스트 가져오기
    if (newText.length <= maxLength) {
      setText(newText); // 최대 글자 수 이내일 때 상태 업데이트
    }
  };

  /* 마음에 들어요 / 부족해요 */
  //마음에 들어요 클릭
  const handleLike = async () => {
    // 서버로 보낼 데이터
    const data = {
      action: "like", // 'like' 라는 액션을 서버로 전송
    };

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLike(true);
        setUnlike(false);
        // 성공적으로 처리되었을 때 클라이언트 상태 업데이트
      } else {
        console.error("마음에 들어요 처리 실패");
      }
    } catch (error) {
      console.error("요청 실패:", error);
    }
  };

  //부족해요 클릭
  const handleUnlike = async () => {
    // 서버로 보낼 데이터
    const data = {
      action: "unlike", // 'unlike' 라는 액션을 서버로 전송
    };

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setUnlike(true);
        setLike(false);
        // 성공적으로 처리되었을 때 클라이언트 상태 업데이트
      } else {
        console.error("부족해요 처리 실패");
      }
    } catch (error) {
      console.error("요청 실패:", error);
    }
  };

  /* 변환 글 복사하기 */
  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(completeText); // 클립보드에 텍스트 복사
      alert("텍스트가 클립보드에 복사되었습니다.");
    } catch (error) {
      console.error("텍스트 복사 실패:", error);
    }
  };

  return (
    <Wrapper>
      <Header />
      <Section>
        <CharactorWrapper>
          <Charactor src={CompleteCharactor} />
          <CompleteTitleWrapper>
            <CompleteTitle>쿠션어 제작이 완료되었어요!</CompleteTitle>
          </CompleteTitleWrapper>
        </CharactorWrapper>
      </Section>
      <Section>
        <BeforeComplete>쿠션어 적용 전이에요.</BeforeComplete>
        <TextAreaWrapper>
          <TextAreaBox onChange={handleTextChange} maxLength={maxLength} />
          <TextAreaText>{text.length}자/400자</TextAreaText>
        </TextAreaWrapper>
      </Section>
      <Section>
        <AfterComplete>쿠션어 제작이 완료되었어요.</AfterComplete>
        <TextAreaWrapper>
          <TextAreaBox className="complete_text" value={completeText} />
          <CopyButton onClick={handleCopyText}>복사</CopyButton>
        </TextAreaWrapper>
        <LikeWrapper>
          <UnlikeButton onClick={handleLike} disabled={like} ontouchstart>
            부족해요
          </UnlikeButton>
          <LikeButton onClick={handleUnlike} disabled={unlike} ontouchstart>
            마음에 들어요
          </LikeButton>
        </LikeWrapper>
      </Section>
      <Section>
        <IngredientTitle>쿠션어 재료</IngredientTitle>
        <IngredientUl>
          <IngredientList>
            <IngredientLabelPartner htmlFor="partner">
              대화 상대
            </IngredientLabelPartner>
            <IngredientInput
              type="text"
              name="partner"
              id="partner"
              value={partner}
              disabled
            />
          </IngredientList>
          <IngredientList>
            <IngredientLabelChannel htmlFor="channel">
              대화 채널
            </IngredientLabelChannel>
            <IngredientInput
              type="text"
              name="channel"
              id="channel"
              value={channel}
              disabled
            />
          </IngredientList>
          <IngredientList>
            <IngredientLabelPurpose htmlFor="purpose">
              대화 목적
            </IngredientLabelPurpose>
            <IngredientInput
              type="text"
              name="purpose"
              id="purpose"
              value={purpose}
              disabled
            />
          </IngredientList>
        </IngredientUl>
      </Section>
      <Section>
        <MoveWrapper>
          <MoveButton>쿠션어 수정하기</MoveButton>
          <MoveButton>새로운 쿠션어 만들기</MoveButton>
        </MoveWrapper>
      </Section>
      <Footer />
    </Wrapper>
  );
};

export default Complete;
