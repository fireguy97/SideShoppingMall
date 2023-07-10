import { styled } from "styled-components";

export default function PhNumInput({ register }) {
  return (
    <PhoneNumberInput>
      <span>PhoneNumber</span>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="PhoneNumber"
        {...register("tel")}
      />
    </PhoneNumberInput>
  );
}

const PhoneNumberInput = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  justify-content: space-between;
`;
