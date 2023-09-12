import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useUserReducer } from '../../config/store/reducers/userReducer/useUserReducer';
import { connectionApiPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/requestLogin';
import { useGlobalReducer } from './../../config/store/reducers/globalReducer/useGlobalReducer';

export const useRequest = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.221.2:8080/auth', body)
      .then((result) => {
        setUser(result.user);
        navigate('Home');
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos',
        });
        setErrorMessage('Usuário ou senha inválidos');
      });
    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
