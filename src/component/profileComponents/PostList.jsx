import { styled } from "styled-components";

export default function PostList() {
  return (
    <StyledPostList>
      <PostDate>
        <li>date</li>
        <li>date</li>
        <li>date</li>
        <li>date</li>
        <li>date</li>
        <li>date</li>
      </PostDate>
      <PostContent>
        <li>ex 재고문의</li>
        <li>ex 사이즈문의</li>
        <li>ex 배송문의</li>
        <li>ex 배송문의</li>
        <li>ex 배송문의</li>
        <li>ex 배송문의</li>
      </PostContent>
    </StyledPostList>
  );
}

const StyledPostList = styled.div`
  position: relative;
  /* right: 100px; */
  display: flex;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0;
  margin-top: -5px;

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
const PostDate = styled.ul`
  li {
    height: 60px;
    width: 60px;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 3.5;
  }
`;
const PostContent = styled.ul`
  padding: 0;
  line-height: 3.5;
  li {
    height: 60px;
    width: 350px;
    border: 1px solid #aaa;
    border-left: none;
  }
`;
