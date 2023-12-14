import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../assets/hamburger_icon.png';
import shareIcon from '../assets/share_icon.png';

const Wrapper = styled.header`
height: 62px;
border: 1px solid red;
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

const Complete  = () => {

	return (<Wrapper>
	<Logo className='header_logo'>logo</Logo>
	<Menu className='header_menu'>
		<MenuUl>
			<MenuShare><MenuShareBtn>공유</MenuShareBtn></MenuShare>
			<MenuDraw><MenuDrawBtn>메뉴</MenuDrawBtn></MenuDraw>
		</MenuUl>
	</Menu>
	</Wrapper>
	);
}			

export default Complete;