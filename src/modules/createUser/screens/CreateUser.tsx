import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="Nome Completo:" />
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="Telefone:" />
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="Email:" />
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="CPF:" />
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="Senha:" />
      <Input margin="0px 0px 16px 0px" placeholder="digite" title="Confirmar Senha:" />
      <Button margin="0px 0px 32px 0px" title="Criar Usuário" />
    </CreateUserContainer>
  );
};

export default CreateUser;
