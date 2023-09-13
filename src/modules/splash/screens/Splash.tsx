import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { useUserReducer } from '../../../config/store/reducers/userReducer/useUserReducer';
import { URL_USER } from '../../../shared/constants/urls';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ContainerSplash, ImageLogoSplash } from '../styles/splash.style';

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const verifyLogin = async () => {
      const returnUser = await request({
        url: URL_USER,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });

      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);

  return (
    <ContainerSplash>
      <ImageLogoSplash resizeMode="center" source={require('../../../assets/images/logo.png')} />
    </ContainerSplash>
  );
};

export default Splash;
