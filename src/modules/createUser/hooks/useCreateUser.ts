import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from './../../../shared/constants/urls';
import { MenuUrl } from './../../../shared/enums/MenuUrl.enum';
import { MethodEnum } from './../../../shared/enums/methods.enum';
import { removeSpecialCharacters } from './../../../shared/functions/characters';
import { validateCpf } from './../../../shared/functions/cpf';
import { validateEmail } from './../../../shared/functions/email';
import { validatePhone } from './../../../shared/functions/phone';
import { CreateUserType } from './../../../shared/types/createUserType';

export const useCreateUser = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request, loading } = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<CreateUserType>({
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (
      createUser.name !== '' &&
      validatePhone(createUser.phone) &&
      validateEmail(createUser.email) &&
      validateCpf(createUser.cpf) &&
      createUser.password !== '' &&
      createUser.password === createUser.confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: {
        ...createUser,
        phone: removeSpecialCharacters(createUser.phone),
        cpf: removeSpecialCharacters(createUser.cpf),
      },
      message: 'Usuário cadastrado com sucesso!',
    });
    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }],
      });
    }
  };

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [name]: event.nativeEvent.text,
    }));
  };

  return {
    createUser,
    loading,
    disabled,
    handleOnChangeInput,
    handleCreateUser,
  };
};
