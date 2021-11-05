import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: var(--default-border-radius);
    border: 1px solid var(--input-border-color);
    background: var(--input-background);
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--white-text);
    border-radius: var(--default-border-radius);
    border: 0;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  //
`;
