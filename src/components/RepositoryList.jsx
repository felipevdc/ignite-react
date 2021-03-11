import { RepositoryItem } from "./RepositoruItem";

const repository = {
    name: 'Unform',
    description: 'Form in react',
    link: "https://github.com/"
};

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
};