import { useRef } from 'react';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  const { createUser, handleOnChangeInput, handleCreateUser, loading, disabled } = useCreateUser();

  const phoneInput = useRef<TextInput>(null);
  const emailInput = useRef<TextInput>(null);
  const cpfInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const confirmPasswordInput = useRef<TextInput>(null);

  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Nome Completo:"
        onSubmitEditing={() => phoneInput?.current?.focus()}
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        type="cel-phone"
        title="Telefone:"
        ref={phoneInput}
        onSubmitEditing={() => emailInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Email:"
        ref={emailInput}
        onSubmitEditing={() => cpfInput?.current?.focus()}
        keyboardType="email-address"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        type="cpf"
        title="CPF:"
        ref={cpfInput}
        onSubmitEditing={() => passwordInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Senha:"
        secureTextEntry
        ref={passwordInput}
        onSubmitEditing={() => confirmPasswordInput?.current?.focus()}
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="digite"
        title="Confirmar Senha:"
        secureTextEntry
        ref={confirmPasswordInput}
        onSubmitEditing={handleCreateUser}
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
