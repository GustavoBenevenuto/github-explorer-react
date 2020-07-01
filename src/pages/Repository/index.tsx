import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams {
    name_repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}


const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.name_repository}`)
            .then(response => setRepository(response.data))

        api.get(`repos/${params.name_repository}/issues`)
            .then(response => setIssues(response.data))

    }, [params.name_repository]);

    return (
        <>
            <Header>
                <img src={LogoImage} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            {repository ?
                (
                    <RepositoryInfo>
                        <header>
                            <img src={repository.owner.avatar_url}
                                alt={repository.owner.login} />

                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>

                        </header>
                        <ul>
                            <li>
                                <strong>{repository.stargazers_count}</strong>
                                <span>Starts</span>
                            </li>

                            <li>
                                <strong>{repository.forks_count}</strong>
                                <span>Forks</span>
                            </li>

                            <li>
                                <strong>{repository.open_issues_count}</strong>
                                <span>Issues</span>
                            </li>
                        </ul>
                    </RepositoryInfo>
                )
                :
                (
                    <p>Carregando...</p>
                )
            }

            <Issues>
                {issues.map((item, index) => (
                    <a href={item.html_url} key={index}>
                        <div>
                            <strong>{item.title}</strong>
                            <p>{item.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    )
}

export default Repository;