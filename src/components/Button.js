import styled from 'styled-components';

function Button({ className, buttonText, onButtonClicked }) {
  return (
    <ButtonWrapper className={className} onClick={onButtonClicked}>
      {buttonText}
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button`
  color: ${({ theme }) => theme.light.text};

  // Defaults before applying new styles
  background-color: #F0F0F0;
	border: none;
  outline: none;
	padding: 0;

  border: 2px solid #000;
  border-radius: 20px;
  width: 100%;
  height: auto;

  cursor: pointer;
`;