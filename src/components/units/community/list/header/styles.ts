import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 70px;
  background-image: url("/community/list/banner1.png");
  background-position: center;
  background-repeat: no-repeat;

  > h1 {
    font-size: 50px;
    color: white;
  }
`;

export const SearchbarWrapper = styled.div`
  width: 100%;
  padding: 0 100px;
`;

export const Searchbar = styled.input`
  width: 100%;
  padding: 0 12px;
  border: none;
  border-bottom: 5px solid #3a6625;
  outline-color: #fff;
`;
