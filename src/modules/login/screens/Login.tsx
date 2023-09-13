// import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
// import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
// import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  // const navigation = useNavigation();
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  // useEffect(() => {
  //   const test = async () => {
  //     const token = await getAuthorizationToken();
  //     if (token) {
  //       navigation.navigate(MenuUrl.HOME);
  //     }
  //   };

  //   test();
  // }, []);

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          placeholder="Digite seu e-mail"
          title="Email:"
          onChange={handleOnChangeEmail}
        />
        <Input
          value={password}
          errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha:"
          onChange={handleOnChangePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          loading={loading}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
