import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useUserReducer } from '../../config/store/reducers/userReducer/useUserReducer';
import { MenuUrl } from '../enums/MenuUrl.enum';
import { connectionApiPost, MethodType } from '../functions/connection/connectionAPI';
import connectionAPI from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/requestLogin';
import { useGlobalReducer } from './../../config/store/reducers/globalReducer/useGlobalReducer';
import { setAuthorizationToken } from './../functions/connection/auth';

interface requestProps<T> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: unknown;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await connectionAPI
      .connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso!',
            text: message,
          });
        }
        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: error.message,
        });
        return undefined;
      });
    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.221.2:8080/auth', body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
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
    request,
    authRequest,
    setErrorMessage,
  };
};
