import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: -7.3rem;
  padding: 0 3rem ;
  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7.3rem;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    /* box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3); */
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highligth-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
