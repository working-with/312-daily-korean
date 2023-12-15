import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, Typography  } from 'antd';
import hamburgerIcon from '../assets/hamburger_icon.png';
import shareIcon from '../assets/share_icon.png';
import theme from '../style/theme'
import MongleLogo from "../assets/mongle_logo.png";
import DrawerBg from "../assets/drawer.png";

import { Link } from 'react-router-dom';

const { Text } = Typography;

const Wrapper = styled.header`
height: 62px;
background: ${theme.colors.yellow2};
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
padding: 8px 18px;
box-sizing: border-box;
`;

const LogoWrapper = styled.div`
`

const Logo = styled.a`
display: block;
width: 46px;
height: 46px;
background: url(${MongleLogo}) no-repeat center;
background-size: contain;
text-indent: -9999px;
`;

const Menu = styled.div`
display: flex;
flex-flow: row nowrap;
`;

const MenuUl = styled.ul`
display: flex;
flex-flow: row nowrap;
`

const MenuShare = styled.li`
display: block;
margin-right: 16px;
list-style: none;
`
const MenuDraw = styled.li`
display: block;
list-style: none;
`

const MenuShareBtn = styled.button`
width: 24px;
height: 24px;
background: url(${shareIcon});
background-size: cover;
border: none;
text-indent: -9999px;
cursor: pointer;
`

const MenuDrawBtn = styled.button`
width: 24px;
height: 24px;
background: url(${hamburgerIcon});
background-size: cover;
border: none;
text-indent: -9999px;
cursor: pointer;
`;

const DrawerWrapper = styled(Drawer)`
width: 100%;
height: 100vh;
background: url(${DrawerBg}) no-repeat center  !important;
background-size: cover !important;
`;

const DrawerClose = styled.button`
	position: absolute;	
background: none;
	border: none;
	right: 30px;
`;

const DrawerMenuWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
margin-top: 48px;
`;

const DrawerMenu = styled.a`
font-size: 18px;
font-weight: bold;
line-height: 21.6px;
margin-bottom: 48px;
color: black;
`;

	const handleShare = async () => {	

		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Title to share', // 공유될 제목
					text: 'Check out this URL', // 공유될 텍스트
					url: 'https://localhost:3000/' // 공유될 URL
				});
				console.log('공유 완료!');
			} catch (error) {
				console.error('공유 실패:', error);
			}
		} else {
			console.log('Web Share API를 지원하지 않는 브라우저입니다.');
		}
	}

const Header  = () => {


	const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

	if (window.location.pathname === '/') return null;


	return (<Wrapper>
	<LogoWrapper className='header_logo'><Logo  href="#">logo</Logo></LogoWrapper>
	<Menu className='header_menu'>
		<MenuUl>
			<MenuShare><MenuShareBtn onClick={handleShare}>공유</MenuShareBtn></MenuShare>
			<MenuDraw><MenuDrawBtn onClick={showDrawer}>메뉴</MenuDrawBtn></MenuDraw>
		</MenuUl>
	</Menu>
	<DrawerWrapper
				className='drawer'
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
				size="262px"
      >
				<DrawerClose onClick={onClose}><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.70538 11.2946C7.09466 10.9053 7.095 10.2743 6.70615 9.88462L3.25073 6.42165C3.01822 6.18863 3.01822 5.81137 3.25073 5.57835L6.70615 2.11538C7.095 1.72569 7.09466 1.09466 6.70538 0.705384C6.31581 0.315811 5.68419 0.315811 5.29462 0.705385L0.733333 5.26667C0.328324 5.67168 0.328324 6.32832 0.733333 6.73333L5.29462 11.2946C5.68419 11.6842 6.31581 11.6842 6.70538 11.2946Z" fill="black"/>
</svg>
</DrawerClose>
				<DrawerMenuWrapper>
					<DrawerMenu>의견 제안</DrawerMenu>
					<DrawerMenu>이용 약관</DrawerMenu>
					<DrawerMenu>개인정보처리방침</DrawerMenu>
					</DrawerMenuWrapper>
      </DrawerWrapper>
	</Wrapper>
	);
}			

export default Header;