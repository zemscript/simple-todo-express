import { createGlobalStyle, css, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --fontTitle: 'Montserrat', sans-serif;
        --fontSubtitle: 'Istok Web', sans-serif;
        --fontText: 'Roboto', sans-serif;
        --fontSize12: 1.2rem;
        --fontSize14: 1.4rem;
        --fontSize16: 1.6rem;
        --fontSize18: 1.8rem;
        --fontSize24: 2.4rem;
        --colorMain: #00538A;
        --colorHover: #004070;
        --colorActive: #003056;
        --colorText: #393b44;
        --colorBackground: #f7f8fa;
        /* --colorMain: #EC7C26; */
        /* --colorText: #595959; */
    }
`;

export const Section = styled.section`
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const BaseInput = css`
  display: block;
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  border: 0.1rem solid #e0e0e0;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: #333;

  &:focus {
    outline: none;
    border-color: var(--colorMain);
    box-shadow: 0 0 0 0.3rem rgba(74, 139, 250, 0.3);
  }
`;

export const Input = styled.input`
  ${BaseInput}
`;

export const TextArea = styled.textarea`
  ${BaseInput}
  resize: vertical;
`;

export const CopyArea = styled.div`
  font-size: 1.6rem;
  color: #333;
  cursor: pointer;
  padding: 0.8rem;
  border: 0.1rem dashed #ccc;
  border-radius: 0.4rem;
  transition: border-color 0.2s;
  white-space: pre-wrap;
  user-select: none;

  &:hover {
    border-color: #999;
  }

  &:active {
    border: 0.1rem solid #ccc;
  }
`;

export const TitlePage = styled.h1`
  font-family: var(--fontTitle);
  font-size: var(--fontSize24);
  text-align: center;
`;

export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: var(--colorBackground);
  border-radius: 0.8rem;
  padding: 1.6rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
`;

export const BlockOutput = styled.div`
  margin-top: 2.4rem;
  background: #f7f8fa;
  border-radius: 0.8rem;
  padding: 1.6rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
`;

export const ErrorText = styled.span`
  color: red;
  font-family: var(--fontText);
  font-size: var(--fontSize12);
  margin-top: 0.5rem;
`;

export const BlockMargin = styled.div`
  margin: 0% 25%;

  @media (max-width: 1023px) {
    margin: 0% 5%;
  }
`;

export const OutputTitle = styled.p`
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #555;
  }

  &.placeholder {
    color: #6f6f6f;
  }
`;

export const LabelText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #2e2e2e;
  margin-bottom: 0.4rem;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
`;

export default GlobalStyles;
