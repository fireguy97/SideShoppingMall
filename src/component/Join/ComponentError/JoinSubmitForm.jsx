import styled from "styled-components";
export default function JoinSubmitForm({ isFormValid }) {
  return (
    <JoinSubmit type="submit" disabled={!isFormValid}>
      Join Now
    </JoinSubmit>
  );
}
const JoinSubmit = styled.button`
  position: relative;
  margin-left: 7.1875rem;
  width: 18.125rem;
  height: 5rem;
  background-color: #171717;
  color: aliceblue;
  margin-bottom: 10px;
  cursor: pointer;
`;
