import { styled } from "styled-components";

export default function EmailInput({ register }) {
  return (
    <StyledEmailInput>
      <span>Email</span>
      <input
        name="email"
        type="email"
        placeholder="email"
        {...register("email")}
      />
    </StyledEmailInput>
  );
}

const StyledEmailInput = styled.div`
  display: flex;
  gap: 1.55rem;
  span {
    padding-right: 3.8125rem;
  }
`;
