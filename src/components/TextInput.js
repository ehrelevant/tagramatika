import styled from 'styled-components';

function TextInput() {
  return (
    <TextInputWrapper>
      <textarea className="text-input-area" placeholder="Magsulat dito..." />
    </TextInputWrapper>
  );
}

export default TextInput;

const TextInputWrapper = styled.div`
  width: 70%;
  height: 400px;

  border: 1px solid #000;
  border-radius: 20px;

  background: #F0F0F0;
  // background: rgba(240, 240, 240, 0.5);

  padding: 20px;

  .text-input-area {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    resize: none;

    color: ${({ theme }) => theme.light.text };
    font-size: 1.6rem;

    background: none;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;