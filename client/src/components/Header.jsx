import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../assets/hamburger_icon.png';
import shareIcon from '../assets/share_icon.png';
import theme from '../style/theme'

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

const Logo = styled.div`
background: pink
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
`

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


	
	return (<Wrapper>
	<Logo className='header_logo'><a href="#">logo</a></Logo>
	<Menu className='header_menu'>
		<MenuUl>
			<MenuShare><MenuShareBtn onClick={handleShare}>공유</MenuShareBtn></MenuShare>
			<MenuDraw><MenuDrawBtn>메뉴</MenuDrawBtn></MenuDraw>
		</MenuUl>
	</Menu>
	</Wrapper>
	);
}			

export default Header;