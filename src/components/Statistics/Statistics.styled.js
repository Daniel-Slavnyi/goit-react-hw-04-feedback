import styled from "@emotion/styled";

export const WrapList = styled.ul`
display: flex;
margin: 0;
padding: 0;
list-style: none;
flex-wrap: wrap;
justify-content: center;
gap: 15px;
`

export const Text = styled.p`
color: #fff;
padding: 20px;
min-width:  100px;
  border: 0.2rem solid #fff;
  border-radius: 10px;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
  text-transform: uppercase;
  font-size: 20px;
  text-shadow:
            -0.1rem -0.1rem 0.5rem #fff,
            0.1rem 0.1rem 0.5rem #fff,
            0 0 1rem #f40,
            0 0 2rem #f40,
            0 0 3rem #f40,
            0 0 4rem #f40,
            0 0 10rem #f40;
        
        box-shadow:
            0 0 0.5rem #fff,
            inset 0 0 0.5rem #fff,
            0 0 1rem #08f,
            inset 0 0 0.5rem #08f,
            0 0 2rem #08f,
            inset 0 0 1rem #08f;        

`