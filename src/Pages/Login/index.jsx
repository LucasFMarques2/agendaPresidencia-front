import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input'
import { Button } from "../../Components/Button";

import logo from '../../assets/logoPresidencia.png'

export function Login() {
    return (
        <Container>
            <Form>
                <img src={logo} alt="" />
                <h1>Agenda da Presidência</h1>
                <p>Aplicação para gerenciamento de agenda</p>

                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Entrar" />
                <Link to="cadastro">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}