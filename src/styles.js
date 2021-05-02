import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #050505;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #B70009;
    clip-path: circle(25% at right 90%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #B70009;
    clip-path: circle(20% at 10% 10%);
  }
`

export const Container = styled.div`
  position: relative;
  width: 100vw;
  margin: 0 0 0 2vw;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  z-index:1;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  @media only screen and (max-width: 768px) {
    padding: 0 5vw;
    margin:0;
  }
`;

export const Content = styled.div`
  width:100%;
  max-width:1200px;
`;

export const Glassmorphism = styled.div`
  position: relative;
  width: 90vw;
  height:100%;
  min-height: 80vh;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);
  height:100vh;
`;

export const GlassEffect = styled.div`
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  background: rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
`;

export const LogoImg = styled.img`
  width: 30%;
  position: absolute;
  margin: 10px;
  top: 0;
  left: 0;

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const ButtonNeon = styled.button`
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 14px;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  text-decoration: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  background: rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);

  &:hover{
    transition: box-shadow 0.2s ease-in-out, border-color 0.5s ease-in-out;
    box-shadow: 0 0 5px #B70009,
                0 0 10px rgb(255 0 0 / 0.8),
                0 0 15px rgb(255 0 0 / 0.7),
                0 0 20px rgb(255 0 0 / 0.6);
    border-color: #B70009;
  }
    
`;