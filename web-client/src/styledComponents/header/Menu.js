import styled from "styled-components";

const Container = styled.div`
  background-color: var(--text-color);
  background-image: linear-gradient(to right, #0f361d, #385145);
  height: 50px;
  width: 100%;
  border-bottom: 0.5px solid #d4ded8;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  overflow: hidden;

  &:hover {
    background-image: none;
    background-color: green;
  }
`;

const Title = styled.p`
  height: 100%;
  font-family: "Lato Bold", sans-serif;
  font-style: 14px;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const MenuIcon = styled.img`
  object-fit: contain;
  width: 21px;
  height: 16px;
  margin-left: 20px;
`;

function Menu({ src, title }) {
  return (
    <Container>
      <MenuIcon src={src} alt="Logo" />
      <Title>{title}</Title>
    </Container>
  );
}

export default Menu;
