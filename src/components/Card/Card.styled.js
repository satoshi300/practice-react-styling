import styled from "styled-components";

export const WrapperCard = styled.div`
    margin-top: 20px;
    max-width: 320px;
    width: 100%;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);

`

export const WrapperBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

`

export const Title = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.5;

`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

`

// export { WrapperBody, WrapperCard, Title, Text, Image };