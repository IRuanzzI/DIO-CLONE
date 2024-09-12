import React from "react";
import { Button } from '../Button';
import logo from '../../Assets/logo-dio.png';
import { Link } from "react-router-dom";
import {
    BuscarInputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input,
    UserPicture,
} from './styles';
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    const handleEntrar = () => {
        navigate('/Login');
    };

    const handleCadastrar = () => {
        navigate('/Cadastro');
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado && (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live code</Menu>
                            <Menu>Global</Menu>
                        </>
                    )}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/143773385?v=4&size=64" />
                    ) : (
                        <>
                            <MenuRight as={Link} to="/">Home</MenuRight>
                            <Button title="Entrar" variant="primary" onClick={handleEntrar} />
                            <Button title="Cadastrar" onClick={handleCadastrar} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
