import React from "react"

//import {Link} from "react-router-dom";

import { Header } from "../../components/Header";
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
                <UserInfo percentual={80} nome={"Ruan Pablo"} image={"https://avatars.githubusercontent.com/u/143773385?v=4&size=64"} />
            </Column>
        </Container>


    </>)
}

export { Feed }
