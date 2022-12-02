import styled from 'styled-components'; 


export const TextInput = styled.input`
  width: 20%;
  border-radius: 20px;
  height: 30px;
  padding: 5px;
`

export const SubmitButton = styled.button`
  margin-top: 10px;
`

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.background};
    margin-top: 40px;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
  
  p {

    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;