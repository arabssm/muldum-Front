import Sidebar from "../../compoment/sidebar/sidebar";
import styled from '@emotion/styled'
import background from "../../assets/onboarding/background.svg";
import background2 from "../../assets/onboarding/background2.svg";
import { useState, useEffect } from "react";

export default function Onboarding() {
  const slideList = [
    {
      title: "전공동아리 중간 발표회",
      dateText: "2025년 5월 28일\n다목적홀",
      dDay: "D-89",
      image: background,
    },
    {
      title: "전공동아리 최종 발표회",
      dateText: "2025년 11월 11일\n대강당",
      dDay: "D-30",
      image: background2,
    },
    {
      title: "전공동아리 최종 발표회",
      dateText: "2025년 11월 11일\n대강당",
      dDay: "D-30",
      image: background2,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideList.length]);

  return (
    <>
      <Sidebar />
      <Container>
        <ContentWrapper>
          <SliderWrapper>
            <Slider index={index}>
              {slideList.map((item, i) => (
                <Card key={i}>
                  <CardImg src={item.image} />
                  <CardContent>
                    <Cardtext>
                      <Text>{item.title}</Text>
                      <Text1>
                        {item.dateText.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </Text1>
                    </Cardtext>
                    <Date>{item.dDay}</Date>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </SliderWrapper>

          <Section>
            <Sectionname>메뉴</Sectionname>
            <Sectiontext>원하는 항목을 선택하여 이동하세요</Sectiontext>
            <Sectionsection>
              <SectionCard>
                역대 전공동아리 보러가기
                <GoText>바로가기 &gt;</GoText>
              </SectionCard>
              <SectionCard>
                물품 신청 하러가기
                <GoText>바로가기 &gt;</GoText>
              </SectionCard>
              <SectionCard>
                월말평가 작성하기
                <GoText>바로가기 &gt;</GoText>
              </SectionCard>
              <SectionCard>
                공지사항 보러가기
                <GoText>바로가기 &gt;</GoText>
              </SectionCard>
            </Sectionsection>
          </Section>
        </ContentWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: 220px;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SliderWrapper = styled.div`
  width: 90%;
  height: 250px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #1D1D1D;
  border-radius: 12px;
`;

const Slider = styled.div<{ index: number }>`
  display: flex;
  width: 100%;
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
  transition: transform 0.5s ease;
`;

const Card = styled.div`
  flex: 0 0 100%;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const CardImg = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  width: 200px;
  top:-5%;
  width: 100%;
  left: 50%;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 100%;
  margin-top: 20px;
  margin-left: 2%;
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  backdrop-filter: blur(1px);
`;

const Cardtext = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.h2`
  font-size: 36px;
  font-family: "Paperlogy";
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

const Text1 = styled.p`
  font-size: 20px;
  margin-top: 30px;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Date = styled.div`
  font-size: 70px;
  font-weight: 800;
  display: flex;
  margin-top: 40px;
  align-self: flex-start;
  margin-right: 100px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

const Section = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 20px;
`;

const Sectionname = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Sectiontext = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const Sectionsection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  min-height: 33vh;
`;

const SectionCard = styled.div`
  background-color: #f9f9f9;
  padding: 28px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 18px;
  font-weight: 600;
  color: #222;
  display: flex;
  height: 80px;
  width: 580px;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const GoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #999;
  margin-top: 16px;
`;