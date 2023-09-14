import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  const { createUser, handleOnChangeInput, handleCreateUser, loading, disabled } = useCreateUser();

  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Nome Completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        type="cel-phone"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        type="cpf"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Confirmar Senha:"
      />
      <Button
        disabled={disabled}
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Criar Usuário"
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
