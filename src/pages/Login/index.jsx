import React from "react"
import { useNavigate } from "react-router-dom";
//import {Link} from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Columnn, Container, Create, Forget, SubtitleLogin, TitleLogin, Title, Wrapper, Row } from "./styles";

const Login = () => {

    const navigate= useNavigate();

    const handleClickFeed = () => {

        navigate('/feed')

    }





    return (<>
        <Header />
        <Container>
            <Columnn>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.

                </Title>
            </Columnn>
            <Columnn>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form>
                        <Input placeholder="Email" leftIcon={<MdEmail/>} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>} />
                        <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type='button'/>
                    </form>
                    <Row>
                        <Forget>Esqueci minha senha</Forget>
                        <Create>Criar Conta</Create>
                    </Row>
                </Wrapper>
            </Columnn>


        </Container>


    </>)
}

export { Login }
