import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateUser from './modules/createUser';
import Home from './modules/home';
import Login from './modules/login';
import Orders from './modules/orders';
import Profile from './modules/profile';
import Splash from './modules/splash';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import { Icon } from './shared/icon/Icon';
import { theme } from './shared/themes/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
    let iconName: string;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Orders':
        iconName = 'cart';
        break;
      default:
        iconName = 'profile';
        break;
    }

    return <Icon name={iconName} size={18} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => renderTabBarIcon(color, route),
        tabBarActiveTintColor: theme.colors.neutralTheme.white,
        tabBarInactiveTintColor: theme.colors.pinkTheme.pink80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
          padding: 8,
          backgroundColor: theme.colors.mainTheme.primary,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil', headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar Usuário' }}
        />

        <Stack.Screen
          name={MenuUrl.HOME}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
