import styled from 'styled-components';

function TextInput({ onTextInputChange, textInputValue, textInputActive, fontSizeValue }) {
  return (
    <TextInputWrapper textInputActive={textInputActive} fontSizeValue={fontSizeValue}>
      <textarea className="text-input-area" placeholder="Magsulat dito..." onChange={onTextInputChange} value={textInputValue} />
    </TextInputWrapper>
  );
}

export default TextInput;

const TextInputWrapper = styled.div`
  width: 70%;
  height: 400px;

  border: 1px solid ${({ theme }) => theme.border};;
  border-radius: 20px;

  background-color: ${({ textInputActive, theme }) => (
    (textInputActive) ? (theme.textInputBgActive) : (theme.textInputBgInactive)
  )};
  transition: 100ms ease-in-out;

  padding: 20px;

  margin: 10px 0 30px 0;

  .text-input-area {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    resize: none;

    color: ${({ theme }) => theme.text };
    font-size: ${({ fontSizeValue }) => fontSizeValue}rem;

    background: none;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;