import styled from "styled-components";
export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 4rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 10rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 2rem;
    border-radius: var(--default-border-radius);
    transition: filter 0.2s;
    height: unset;
    @media (min-width: 720px) {
      padding: 0 2rem;
      height: 3rem;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
