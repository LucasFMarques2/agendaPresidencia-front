import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import logo from "../../assets/logoPresidencia.png";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <img src={logo} alt="" />
        <h1>Agenda da Presidência</h1>
        <p>Aplicação para gerenciamento de agenda</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />
        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
