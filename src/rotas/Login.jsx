import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../json/API.json';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const OverlayContainer = styled.div`
  background-color: #CCCCCC;
  padding: 10px;
  border-radius: 20px;
  width: 25vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #CCCCCC;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

const LoginButton = styled(Button)`
  margin-bottom: 15px;
  background-color: #CCCCCC;
  border: none;
  border-radius: 15px;
  color: white;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #707070;
    transition: background-color 0.5s ease;
  }
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  &&& {
    background-color: #CCCCCC;
    border-radius: 15px;
    transition: background-color 0.5s ease;
    border: none;

    &:hover {
      background-color: #707070;
    }
  }
`;
const LogoutButtonStyled = styled.button`
  background-color: #f44336; /* Cor de fundo */
  color: white; /* Cor do texto */
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Modal, setShowModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'usuario' && password === '123456') {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleJsonRead = async () => {
    try {
      const response = await fetch('API.json');
      const data = await response.json();
      console.log('Dados JSON:', data);
    } catch (error) {
      console.error('Erro ao ler o arquivo JSON:', error);
    }
  };

  useEffect(() => {
    handleJsonRead();
  }, []); 

  return (
    <MainContainer>
      <OverlayContainer>
        <FormContainer>
          <Container>
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={handleUsernameChange}
            />
  
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
  
            <LoginButton variant="primary" onClick={handleLogin}>
              Login
            </LoginButton>
  
            <Dropdown className="mb-3">
              <StyledDropdownToggle variant="primary" id="dropdown-basic">
                Função
              </StyledDropdownToggle>
  
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">cliente</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </FormContainer>
      </OverlayContainer>
    </MainContainer>
  );
};

export default Login;