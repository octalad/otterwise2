import { useForm } from "react-hook-form";
import { login } from "./services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

function App() {
  const schema = yup
    .object({
      email: yup.string().email().required("E-mail é obrigatório"),
      password: yup
        .string()
        .min(5, "A senha deve ter np minimo 5 caracteres")
        .required("Senha é obrigatória"),
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
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register("password", { required: true })} />

      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">enviar</button>
    </form>
  );
}

export default App;
