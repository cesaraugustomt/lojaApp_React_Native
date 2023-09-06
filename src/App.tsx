import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 48px;
  color: #7f13ba;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Primeiro app</Text>
      <TextNew>Novo teste</TextNew>
    </SafeAreaView>
  );
};

export default App;
