import { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { ButtonHandle } from "./ButtonHandle";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 64rem;
  width: 100%;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ reviewIndex }) => `translateX(-${reviewIndex * 100}%)`};
  width: 100%;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  flex-shrink: 0;

  article {
    width: 50%;
    min-width: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    border-radius: 4rem;
  }
`;

export const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalGroups = slides.length;

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  const next = () =>
    setActiveIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));

  return (
    <Container>
      <CarouselInner reviewIndex={activeIndex}>
        {slides.map((group, idx) => (
          <ItemsWrapper key={idx}>
            {group.map((item, subIdx) => (
              <Card
                key={item.title || subIdx}
                src={item.img}
                title={item.title}
                desc={item.desc}
                href={item.link}
                button="</> Inpercionar"
              />
            ))}
          </ItemsWrapper>
        ))}
      </CarouselInner>
      <Controls>
        <ButtonHandle standOut={true} onClick={prev}>Anterior</ButtonHandle>
        <ButtonHandle standOut={true} onClick={next}>Siguiente</ButtonHandle>
      </Controls>
    </Container>
  );
};