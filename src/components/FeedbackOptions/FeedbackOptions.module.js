import styled from "@emotion/styled";

export const WrapBtn = styled.ul`
 display: flex;
 margin: 0;
 padding: 0;
 justify-content: space-between;
`

export const Button = styled.button`
/* CSS */
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  touch-action: manipulation;


&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #00ffff,
    #ff00ff,
    #E0FFFF,
    #8A2BE2,
    #8B008B,
    #FF00FF,
    #FFE4C4,
    #7B68EE,
    #87CEFA
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

&:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`