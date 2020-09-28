import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Title, Form, User, Error } from './styles';
import api from '../../services/api';

interface User {
  login: string;
  avatar_url: string;
  name: string;
}

const Users: React.FunctionComponent = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('@GithubExplorer:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:users', JSON.stringify(users));
  }, [users]);

  async function handleAddUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite o nome do usuário.');
      return;
    }

    try {
      const response = await api.get<User>(`/users/${newUser}`);

      const user = response.data;

      setUsers([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse usuário.');
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore usuários e repositórios no GitHub.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddUser}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <User>
        {users.map((user) => (
          <Link key={user.login} to={`users/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.name}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </User>
    </>
  );
};

export default Users;
