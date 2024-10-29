import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { post } from "./services/post";
import styled from "styled-components";

function App() {
  const schema = yup
    .object({
      title: yup.string().required("campo obrigatorio"),
      body: yup.string().min(30, "deve ter no min 30 letras").required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await post(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title", { required: true })} />
        {errors.title && <span>{errors.title.message}</span>}

        <input type="text" {...register("body", { required: true })} />
        {errors.body && <span>{errors.body.message}</span>}

        <button type="submit">enviar</button>
      </form>
      <Button>botão</Button>
    </div>
  );
}
const Button = styled.button`
  border: none;
  background-color: aquamarine;
  color: black;
  padding: 5px 10px;
  &hover: {
    color: white;
  }
`;

export default App;
