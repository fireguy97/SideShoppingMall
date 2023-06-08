import { styled } from "styled-components";
import { useForm } from "react-hook-form";

export default function JoinPasswordForm() {
  const { register } = useForm();
  return (
    <StyledPassword>
      <tr>
        <th>Password</th>
        <td>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            required
          />
        </td>
      </tr>
      <tr>
        <th>Password Check</th>
        <td>
          <input
            type="password"
            placeholder="password"
            {...register("passwordCheck")}
            required
          />
        </td>
      </tr>
    </StyledPassword>
  );
}
const StyledPassword = styled.div`
  input {
    height: 1.25rem;
    width: 17.5rem;
  }
`;
