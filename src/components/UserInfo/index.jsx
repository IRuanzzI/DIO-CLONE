import React from "react";

import { Container, NameText, Progress, UserPicture } from "./style";


const UserInfo = ({nome, image, percentual}) => { 
    return(

        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual = {percentual}/>
            </div>
        </Container>

    )
    
}

//TODO: MINUTO 21:01, VERIFICAR PORQUE O TITULO ESTÁ DESALINHADO.
export {UserInfo}