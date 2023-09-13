import { TouchableOpacity, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import Text from '../../../shared/components/text/Text';
import { textTypes } from '../../../shared/components/text/textTypes';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleGoToCreateUser,
  } = useLogin();

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
        <TouchableOpacity onPress={handleGoToCreateUser}>
          <Text
            margin="16px"
            type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
            color={theme.colors.mainTheme.primary}
          >
            Cadastrar usuário
          </Text>
        </TouchableOpacity>
        <Button
          type={theme.buttons.buttonsTheme.primary}
          loading={loading}
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
