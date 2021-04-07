// import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useState } from "react";
// import * as yup from "yup";
// import { Button, TextField } from "@material-ui/core";
// import {
//   CardRegister,
//   TagP,
//   titleStyle,
//   textAreaStyle,
//   buttonStyle,
// } from "./styles";
// import { Card } from "@material-ui/core";
// import D2DLogo from "../../styles/D2DLogo";
// import axios from "axios";
// import { neutralColor } from "../../styles/globalStyles";

// const Register = () => {
//   const history = useHistory();
//   const [errMsg, setErrMsg] = useState(false);

//   const schema = yup.object().shape({
//     username: yup.string().required("Campo obrigatório"),
//     password: yup
//       .string("deve ser string")
//       .min(6, "Mínimo de 6 dígitos")
//       .required("Campo obrigatório"),
//     email: yup.string().email("Email inválido").required("Campo obrigatório"),
//   });

//   const { register, handleSubmit, errors, reset } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const handleMsgErr = () => {
//     setErrMsg(true);
//   };

//   const handleForm = (data) => {
//     axios
//       .post("https://kabit-api.herokuapp.com/users/", data)
//       .then(() => {
//         reset();
//         history.push("/");
//       })
//       .catch(function (e) {
//         if (e.response.status === 400) {
//           handleMsgErr();
//         }
//       });
//   };

//   return (
//     <Card raised={true} style={CardRegister}>
//       <D2DLogo />
//       <h3 style={titleStyle}>Register</h3>
//       <TextField
//         data-testid="userNameRegisterTestId"
//         margin="normal"
//         variant="filled"
//         label="Username"
//         name="username"
//         size="small"
//         style={textAreaStyle}
//         inputRef={register}
//         error={!!errors.username}
//         helperText={errors.username?.message}
//       />
//       <TextField
//         data-testid="passwordRegisterTestId"
//         type="password"
//         margin="normal"
//         variant="filled"
//         label="Senha"
//         name="password"
//         size="small"
//         style={textAreaStyle}
//         inputRef={register}
//         error={!!errors.password}
//         helperText={errors.password?.message}
//       />
//       <TextField
//         data-testid="emailTestId"
//         margin="normal"
//         variant="filled"
//         label="Email"
//         name="email"
//         size="small"
//         style={textAreaStyle}
//         inputRef={register}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//       />

//       <div>
//         <Button
//           data-testid="formRegisterTestId"
//           type="submit"
//           variant="contained"
//           style={buttonStyle}
//           onClick={handleSubmit(handleForm)}
//         >
//           Cadastrar
//         </Button>
//       </div>
//       <div>
//         <Button
//           onClick={() => history.push("/")}
//           style={{ color: neutralColor }}
//         >
//           faça login
//         </Button>
//       </div>
//       {errMsg && <TagP>Usuário já cadastrado</TagP>}
//     </Card>
//   );
// };
// export default Register;
