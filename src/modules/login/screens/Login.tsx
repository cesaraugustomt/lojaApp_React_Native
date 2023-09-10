import axios from 'axios';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const handleOnPress = async () => {
    console.log('clicou');

    const returnDB = await axios.get('http://192.168.221.2:8080/correios/01029-010');

    console.log('returnDB', returnDB.data);
  };

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu e-mail" title="Email:" />
        <Input secureTextEntry placeholder="Digite sua senha" title="Senha:" />
        <Button
          type={theme.buttons.buttonsTheme.secondary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
