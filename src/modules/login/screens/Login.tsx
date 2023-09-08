import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { Icon } from '../../../shared/icon/Icon';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <ContainerLogin>
        <Icon name="home3" color="blue" size={44} />
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu e-mail" title="Email:" />
        <Input secureTextEntry placeholder="Digite sua senha" title="Senha:" />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
