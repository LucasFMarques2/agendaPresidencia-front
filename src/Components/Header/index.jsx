import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import avatarLogo from '../../assets/logoPresidencia.png'

export function Header() {
    return (
        <Container>
            <Profile>
                <img src={avatarLogo} alt="Foto do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Lucas Freitas</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}