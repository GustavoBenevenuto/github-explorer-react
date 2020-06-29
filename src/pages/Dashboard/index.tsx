import React from 'react';
import {Title, Form, Repositories} from './style';
import LogoImage from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={LogoImage} alt="GitHub Explorer"/>
            <Title>Explore repositórios no GitHub</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img src='https://avatars1.githubusercontent.com/u/40447101?s=400&u=0e966219760b77dbb32e1f728c4f2e3dc1c41e99&v=4' alt="Gustavo"/>

                    <div>
                        <strong>GustavoBenevenuto/Clone-Meu-Universo</strong>
                        <p>Clone da aplicação mobile "Meu Universo". Clone da aplicação mobile "Meu Universo". </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src='https://avatars1.githubusercontent.com/u/40447101?s=400&u=0e966219760b77dbb32e1f728c4f2e3dc1c41e99&v=4' alt="Gustavo"/>

                    <div>
                        <strong>GustavoBenevenuto/Clone-Meu-Universo</strong>
                        <p>Clone da aplicação mobile "Meu Universo". Clone da aplicação mobile "Meu Universo". </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src='https://avatars1.githubusercontent.com/u/40447101?s=400&u=0e966219760b77dbb32e1f728c4f2e3dc1c41e99&v=4' alt="Gustavo"/>

                    <div>
                        <strong>GustavoBenevenuto/Clone-Meu-Universo</strong>
                        <p>Clone da aplicação mobile "Meu Universo". Clone da aplicação mobile "Meu Universo". </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;