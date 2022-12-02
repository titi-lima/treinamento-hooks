import React, { useEffect, useState } from "react";

import { HomeContainer, SubmitButton, TextInput } from './styles';



export const Home: React.FC = () => {

    const [teste, setTeste] = useState('');
    const [teste2, setTeste2] = useState(false);
    const [teste3, setTeste3] = useState(true);

    useEffect(() => {
        setTimeout(() => {setTeste3(false)}, 5000);
    }, [teste2, teste3]);

    return (
        <HomeContainer>
            
                <TextInput onChange={(e) => setTeste(e.target.value)} type="text" />
                <SubmitButton onClick={() => {
                    setTeste2(true);
                    setTeste3(true);
                }} >Titi</SubmitButton>
           
            {
                teste2 && teste3 && <h1>{teste}</h1>
            }
        </HomeContainer>
    );
}