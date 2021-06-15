import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//IMPORT DAS TELAS
import LoginScreen from './src/pages/LoginScreen';
import TelaHomeApp from './src/pages/TelaHomeApp';
import TelaCadastro from './src/pages/TelaCadastro';

//PILHA DE NAVEGAÇÃO
const AppNavigator = createStackNavigator({

  'Login': {

    screen: LoginScreen,
    navigationOptions: {
      title: 'TELA DE LOGIN'
    }

  },
  
  'Home': {
    screen: TelaHomeApp,
    navigationOptions: {
      title: 'TELA INICIAL - USUÁRIO LOGADO'
    }
  },
  'Cadastro': {

    screen: TelaCadastro,
    navigationOptions: {
      title: 'TELA DE CADASTRO'
    }

  }
},{
  
  headerStyle: {
    backgroundColor: '#6ca2f7',
    borderBottomWith: 10,
    borderBottomColor: '#c5c5c5'
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 30
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;