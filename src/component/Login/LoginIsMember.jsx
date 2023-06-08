import { styled } from "styled-components";

export default function LoginIsMember({ isMember, setIsMember }) {
  return (
    <MemberSep>
      <MemberSepli
        className={isMember ? "member selected" : "member"}
        onClick={() => setIsMember(true)}
      >
        회원
      </MemberSepli>
      <MemberSepli
        className={!isMember ? "nonMember selected" : "nonMember"}
        onClick={() => setIsMember(false)}
      >
        비회원
      </MemberSepli>
    </MemberSep>
  );
}

const MemberSep = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.0625rem;
  margin-bottom: 1.25rem;
  margin-left: 1.875rem;
`;
const MemberSepli = styled.li`
  width: 12.5rem;
  border: 0.0625rem solid #333;
  cursor: pointer;
  border: 0.0625rem solid #d9d9d9;
  color: #333;
  text-align: center;
  height: 1.5625rem;
  line-height: 1.5;
`;
