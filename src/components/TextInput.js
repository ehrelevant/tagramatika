import styled from 'styled-components';

function TextInput() {
  return (
    <TextInputWrapper className="App">
      <textarea className="text-input-area"/>
    </TextInputWrapper>
  );
}

export default TextInput;

const TextInputWrapper = styled.div`
  width: 70%;
  height: 400px;

  border: 1px solid #000;
  border-radius: 20px;

  background: rgba(240, 240, 240, 0.5);

  padding: 20px;

  .text-input-area {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    resize: none;
  }
`;