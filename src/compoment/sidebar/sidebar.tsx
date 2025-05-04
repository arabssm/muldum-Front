import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from "react";
import profile from '../../assets/sidebar/icon.svg'; 
import home from '../../assets/sidebar/home.svg';
import ranking from '../../assets/sidebar/ranking.svg';
import calender from '../../assets/sidebar/calender.svg';
import check from '../../assets/sidebar/check.svg';
import object from '../../assets/sidebar/object.svg';
import alerticon from '../../assets/sidebar/alerticon.svg';
import setting from '../../assets/sidebar/setting.svg';
import Chome from '../../assets/sidebar/color-home.svg';
import Cranking from '../../assets/sidebar/color-ranking.svg';
import Ccalender from '../../assets/sidebar/color-calender.svg';
import Ccheck from '../../assets/sidebar/color-check.svg';
import Cobject from '../../assets/sidebar/color-object.svg';
import Calerticon from '../../assets/sidebar/color-alerticon.svg';
import Gologin from '../../assets/sidebar/gologin.svg';
import { useNavigate } from "react-router-dom";

const navList = [
  { key: 'home', label: '홈', icon: home, activeIcon: Chome },
  { key: 'ranking', label: '역대 동아리', icon: ranking, activeIcon: Cranking },
  { key: 'calendar', label: '캘린더', icon: calender, activeIcon: Ccalender },
  { key: 'check', label: '월말평가', icon: check, activeIcon: Ccheck },
  { key: 'object', label: '물품관리', icon: object, activeIcon: Cobject },
  { key: 'alert', label: '알림', icon: alerticon, activeIcon: Calerticon },
];

export default function Sidebar() {
  const name: string = "이효준";
  const club: string = "아라";
  const navigate = useNavigate();
  const [active1, Setactive] = useState("home");
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <Profile>
          <Profileimg src={profile} alt="프로필" />
          <ProfileTextGroup>
          <Profileclub>{club}</Profileclub>
            <Profilename>{name}</Profilename>
          </ProfileTextGroup>
        </Profile> */}
        <Profile onClick={() => { navigate(`/login`) }}>
        <Profileimg src={Gologin} alt="프로필" />
          <Gobutton>
            로그인
          </Gobutton>
        </Profile>
        <Nav>
          {navList.map((nav) => (
            <NavItem
              key={nav.key}
              active={active1 === nav.key}
              onClick={() => Setactive(nav.key)}
            >
              <Iconimg
                src={active1 === nav.key ? nav.activeIcon : nav.icon}
                alt={nav.label}
              />
              <IconText active={active1 === nav.key}>
                {nav.label}
              </IconText>
            </NavItem>
          ))}
        </Nav>

        <Floor>
          <NavItem
            active={active1 === "setting"}
            onClick={() => Setactive("setting")}
          >
            <Iconimg
              src={setting}
              alt="세팅"
            />
            <IconText>세팅</IconText>
          </NavItem>
        </Floor>
      </Container>
    </>
  );
}


const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Paperlogy';
    src: url('src/assets/fonts/Paperlogy.ttf') format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #D1D1D1;
  width: 220px;
  height: 100vh;
  padding: 30px 0 40px 32px;
  box-sizing: border-box;
  z-index: 999;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Profileimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profileclub = styled.p`
  font-size: 12px;
  color: #b0b0b0;
  margin: 0;
`;

const Profilename = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #1D1D1D;
  padding-top: 8px;
  width: fit-content;
`;


const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#FF9B621A' : 'transparent')};
`;

const IconText = styled.p<{ active?: boolean }>`
  font-family: 'Paperlogy', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: ${({ active }) => (active ? '#FF9B62' : '#909090')};
`;

const Iconimg = styled.img<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  color: ${({ active }) => (active ? '#FF9B62' : '#909090')};
`;

const Floor = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 10px;
`;
const Gobutton=styled.div`
  user-select: none;
`;
