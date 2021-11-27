import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 12hv;
  width: 100%;
  max-width: 790px;
  min-height: 12px;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  padding: 30px;
`;

export const Content = styled.div`
flex-direction: row;
color: #333;
font-size: 22px;
font-weight: bold;
cursor: pointer;
height: 300px;
line-height: 10px;
z-index: 8;
border-radius: 5px;
padding: 12px 18px;
justify-content: space-between;
align-items: center;
background-color: #fff;
opacity: 0.8;
& span {
  color: #444;
}
`;

export const Title = styled.h1`
  color: #010305;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonDetail = styled.button`
  font-size: 12px;
  color: #005076;
  line-height: 5px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;
