import styled from "styled-components";

export default function EmailInput({ register }) {
  return (
    <div>
      <input type="email" placeholder="email" {...register("email")} required />
    </div>
  );
}
