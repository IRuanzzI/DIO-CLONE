import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/index"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import {
    Wellcome, WellcomeText, Container, ContainerTitle, ContainerSubTitle,
    Layout, ContainerMore,Row, MakeLogin
} from "./style";
import { MdEmail, MdLock, MdFace } from 'react-icons/md';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email('Email inválido').required('CAMPO OBRIGATÓRIO'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('CAMPO OBRIGATÓRIO'),
    nome: yup.string().min(2, "No mínimo 2 caracteres").required('INSIRA UM NOME')
}).required();

const Cadastro = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });



    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/Feed')
    }




    return (
        <>
            <Header />
            <Layout>
                <Wellcome>
                    <WellcomeText>A plataforma para você aprender com experts,
                        dominar as principais tecnologias e
                        entrar mais rápido nas empresas mais desejadas.</WellcomeText>
                </Wellcome>
                <Container>
                    <ContainerTitle>Comece agora grátis</ContainerTitle>
                    <ContainerSubTitle>Crie sua conta e make the change._</ContainerSubTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="nome"
                            control={control}
                            placeholder="nome"
                            leftIcon={<MdFace />}
                            errorMessage={errors.email?.message}
                        />
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
                        <Button title="Criar minha conta" variant="secondary" type="submit" onClick={onSubmit} disables={!isValid} />
                    </form>
                    <ContainerMore>
                     Ao clicar em "criar minha conta grátis",
                     declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </ContainerMore>
                    <Row>
                        Já tenho conta. 
                         <MakeLogin><Link to='/Login' >Fazer login</Link></MakeLogin>
                    </Row>
                </Container>
            </Layout>
        </>
    )


}

export { Cadastro };