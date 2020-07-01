import React, { useState, FormEvent, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Title, Form, Repositories, Error } from './style';
import LogoImage from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [reposiotires, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem('@GitHubExplorer:repositories');

        if(storageRepositories){
            return JSON.parse(storageRepositories);
        }
        return [];
    });
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');


    useEffect(() => {
        localStorage.setItem('@GitHubExplorer:repositories', JSON.stringify(reposiotires));
    },[reposiotires]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...reposiotires, repository]);
            setNewRepo('');
            setInputError('');
        } catch (e) {
            setInputError('Erro na busca por esse repositório');
        }
    }

    return (
        <>
            <img src={LogoImage} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form onSubmit={handleAddRepository} hasError={Boolean(inputError)}>
                <input type="text"
                    placeholder="Digite o nome do repositório"
                    value={newRepo} onChange={event => setNewRepo(event.target.value)} />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError &&
                <Error>
                    {inputError}
                </Error>
            }

            <Repositories>
                {reposiotires.map((item, index) => {
                    return (
                        <Link to={`/repository/${item.full_name}`} key={index}>
                            <img src={item.owner.avatar_url} alt={item.owner.login} />

                            <div>
                                <strong>{item.full_name}</strong>
                                <p>{item.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    )
                })}
            </Repositories>
        </>
    )
}

export default Dashboard;