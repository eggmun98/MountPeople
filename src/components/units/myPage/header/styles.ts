import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px 300px;
  border-bottom: 1px solid #c5c5c5;
  > h1 {
    font-size: 20px;
    font-weight: 400;

    color: 292929;
    :hover {
      color: #3a6625;
    }
  }
  @media (max-width: 1023px) {
    padding: 20px 150px;
    > h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    padding: 20px 0px;
    border-top: 1px solid #c5c5c5;
    border-bottom: none;
    > h1 {
      font-size: 16px;
    }
  }
`;
