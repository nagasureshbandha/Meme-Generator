import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGenerartorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-family: 'Open Sans';
  font-weight: bold;
  text-align: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`

export const FormAndMemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 6px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
color: #fff;
font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
font-family: 'Open Sans';}
`

export const MemeGeneratorForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (min-width:768px){
width:40%;
`

export const Label = styled.label`
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 600;
`

export const Input = styled.input`
  color: #5a7184;
  background-color: #fff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 12px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const Select = styled.select`
  color: #1e293b;
  background-color: #fff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const GenerateButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Open Sans';
  border-radius: 5px;
  background-color: #0b69ff;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`

export const Option = styled.option`
  color: #1e293b;
  background-color: #fff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
