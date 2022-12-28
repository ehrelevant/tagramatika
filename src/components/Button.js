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
  color: ${({ theme }) => theme.text};

  // Defaults before applying new styles
  background-color: ${({ theme }) => theme.textInputBgActive};
  // background-color: ${({ theme }) => theme.textInputBgInactive};

  border: none;
  outline: none;
	padding: 0;

  border: 2px solid ${({ theme }) => theme.border};;
  border-radius: 20px;
  width: 100%;
  height: auto;

  cursor: pointer;
`;