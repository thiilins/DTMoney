import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media (min-width: 720px) {
      max-width: 100%;
    }

    th {
      color: var(--text-body);
      font-weight: 500;
      padding: 1.5rem 0.5rem;
      text-align: left;
      line-height: 1.5rem;
      @media (min-width: 720px) {
        padding: 1.5rem 2rem;
      }
    }
    td {
      padding: 1.5rem 0.7rem;
      border: 0;
      background: var(--shape);
      font-weight: 400;
      color: var(--text-body);
      border-radius: var(--default-border-radius);
      @media (min-width: 768px) {
        padding: 1.5rem 2rem;
      }
      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
