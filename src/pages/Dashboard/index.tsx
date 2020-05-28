import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33840588?s=460&u=20fddfbb4d45b36f7fa2509099acf74bb37dbad5&v=4"
            alt="Roney Charles"
          />
          <div>
            <strong>NATI/CoffeeOnChain</strong>
            <p>An app to vending machines that use blockchain.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33840588?s=460&u=20fddfbb4d45b36f7fa2509099acf74bb37dbad5&v=4"
            alt="Roney Charles"
          />
          <div>
            <strong>NATI/CoffeeOnChain</strong>
            <p>An app to vending machines that use blockchain.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33840588?s=460&u=20fddfbb4d45b36f7fa2509099acf74bb37dbad5&v=4"
            alt="Roney Charles"
          />
          <div>
            <strong>NATI/CoffeeOnChain</strong>
            <p>An app to vending machines that use blockchain.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
