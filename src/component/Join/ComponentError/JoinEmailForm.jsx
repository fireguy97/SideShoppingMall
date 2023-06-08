import { styled } from "styled-components";
import { useForm } from "react-hook-form";

export default function JoinEmailForm() {
  const { register } = useForm();
  return (
    <StyledEmail>
      <tr>
        <th>email</th>
        <td>
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            required
          />
        </td>
      </tr>
    </StyledEmail>
  );
}
const StyledEmail = styled.div`
  margin-left: 63px;
  input {
    height: 1.25rem;
    width: 17.5rem;
  }
`;
