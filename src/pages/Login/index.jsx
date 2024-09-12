import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Column, Container, Create, Forget, SubtitleLogin, TitleLogin, Title, Wrapper, Row } from "./styles";

// Validação do formulário com Yup
const schema = yup.object({
    email: yup.string().email('Email inválido').required('CAMPO OBRIGATÓRIO'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('CAMPO OBRIGATÓRIO'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    // Configuração do formulário com react-hook-form e Yup
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    // Função de envio do formulário
    const onSubmit = data => {
        console.log(data);
        navigate('/feed'); // Redireciona para o feed após login bem-sucedido
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                control={control}
                                placeholder="Email"
                                leftIcon={<MdEmail />}
                                errorMessage={errors.email?.message}  
                            />
                            <Input
                                name="password"
                                control={control}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                                errorMessage={errors.password?.message}  
                            />
                            <Button title="Entrar" variant="secondary" type="submit" disabled={!isValid} />
                        </form>
                        <Row>
                            <Forget>Esqueci minha senha</Forget>
                            <Create>Criar Conta</Create>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Login };
