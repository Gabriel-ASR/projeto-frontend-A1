import HeadWrapper from './components/HeadWrapper/HeadWrapper.jsx'
import Logo from './components/HeadWrapper/Logo/Logo.jsx'
import SearchBar from './components/HeadWrapper/SearchBar/SearchBar.jsx'
import NavWrapper from './components/HeadWrapper/NavWrapper/NavWrapper.jsx'
import NavItem from './components/HeadWrapper/NavWrapper/NavItem/NavItem.jsx'
import LogInLink from './components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/LogInLink/LogInLink.jsx'
import SignInLink from "./components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLink/SignInLink.jsx"
import SignContentWrapper from './components/HeadWrapper/SignContentWrapper/SignContentWrapper.jsx'
import SignInLinkWrapper from './components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLinkWrapper.jsx'
import LogInLinkWrapper from './components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/logInLinkWrapper.jsx'
import LogInIcon from './components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/LogInLink/LogInIcon.jsx'
import SignInIcon from './components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLink/SignInIcon.jsx'
import CategoriesWrapper from './components/CategoriesWrapper/CategoriesWrapper.jsx'
import CatListWrapper from './components/CategoriesWrapper/CatListWrapper/CatListWrapper.jsx'
import CatListItem from './components/CategoriesWrapper/CatListWrapper/CatListItem/CatListItem.jsx'

function App() {
  return (
    <>
        <HeadWrapper>
          <Logo/>
          <SignContentWrapper>
            <LogInLinkWrapper>
              <LogInIcon/>
              <LogInLink/>
            </LogInLinkWrapper>
            <SignInLinkWrapper>
              <SignInIcon/>
              <SignInLink/>
            </SignInLinkWrapper>
          </SignContentWrapper>
          <SearchBar/>
          <NavWrapper>
            <NavItem innerLink="Home"></NavItem>
            <NavItem innerLink="Sobre"></NavItem>
            <NavItem innerLink="Contato"></NavItem>
          </NavWrapper>
        </HeadWrapper>
        <CategoriesWrapper>
          <CatListWrapper>
            <CatListItem innerLink="Esportes"></CatListItem>
            <CatListItem innerLink="Educação"></CatListItem>
            <CatListItem innerLink="Economia"></CatListItem>
            <CatListItem innerLink="Política"></CatListItem>
            <CatListItem innerLink="Entretenimento"></CatListItem>
            <CatListItem innerLink="Saúde"></CatListItem>
            <CatListItem innerLink="Tecnologia"></CatListItem>
            <CatListItem innerLink="Ciência"></CatListItem>
            <CatListItem innerLink="Turismo"></CatListItem>
            <CatListItem innerLink="Negócios"></CatListItem>
            <CatListItem innerLink="Moda"></CatListItem>
            <CatListItem innerLink="Alimentação"></CatListItem>
            <CatListItem innerLink="Jogos"></CatListItem>
            <CatListItem innerLink="Inovação"></CatListItem>
          </CatListWrapper>
        </CategoriesWrapper>
      </>
  )
}

export default App
