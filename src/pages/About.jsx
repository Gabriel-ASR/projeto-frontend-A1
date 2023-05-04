import HeadWrapper from '../components/HeadWrapper/HeadWrapper.jsx'
import Logo from '../components/HeadWrapper/Logo/Logo.jsx'
import SearchBar from '../components/HeadWrapper/SearchBar/SearchBar.jsx'
import NavWrapper from '../components/HeadWrapper/NavWrapper/NavWrapper.jsx'
import NavItem from '../components/HeadWrapper/NavWrapper/NavItem/NavItem.jsx'
import LogInLink from '../components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/LogInLink/LogInLink.jsx'
import SignInLink from "../components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLink/SignInLink.jsx"
import SignContentWrapper from '../components/HeadWrapper/SignContentWrapper/SignContentWrapper.jsx'
import SignInLinkWrapper from '../components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLinkWrapper.jsx'
import LogInLinkWrapper from '../components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/logInLinkWrapper.jsx'
import LogInIcon from '../components/HeadWrapper/SignContentWrapper/LogInLinkWrapper/LogInLink/LogInIcon.jsx'
import SignInIcon from '../components/HeadWrapper/SignContentWrapper/SignInLinkWrapper/SignInLink/SignInIcon.jsx'
import CategoriesWrapper from '../components/CategoriesWrapper/CategoriesWrapper.jsx'
import CatListWrapper from '../components/CategoriesWrapper/CatListWrapper/CatListWrapper.jsx'
import CatListItem from '../components/CategoriesWrapper/CatListWrapper/CatListItem/CatListItem.jsx'
import { Link } from 'react-router-dom'
import ContentWrapper from '../components/ContentWrapper/ContentWrapper.jsx'
import PageTitle from '../components/ContentWrapper/Contact/PageTitle/PageTitle.jsx'
import AboutWrapper  from '../components/ContentWrapper/About/AboutWrapper/AboutWrapper.jsx'
import AboutImage from '../components/ContentWrapper/About/AboutWrapper/AboutImage/AboutImage.jsx'
import AboutText from '../components/ContentWrapper/About/AboutWrapper/AboutText/AboutText.jsx'
import Style from '../components/ContentWrapper/About/AboutWrapper/AboutImage/AboutImage.module.css'
import AboutLongText from '../components/ContentWrapper/About/AboutWrapper/AboutLongText/AboutLongText.jsx'

function About() {
    return (
        <>
            <HeadWrapper>
                <Logo/>
                <SignContentWrapper>
                    <LogInLinkWrapper>
                        <Link to='/login' style={{textDecoration: "none"}}>
                            <LogInIcon/>
                            <LogInLink/>
                        </Link>
                    </LogInLinkWrapper>
                    <SignInLinkWrapper>
                        <Link to='/login' style={{textDecoration: "none"}}>
                            <SignInIcon/>
                            <SignInLink/>
                        </Link>
                    </SignInLinkWrapper>
                </SignContentWrapper>
                    <SearchBar/>
                    <NavWrapper>
                    <NavItem><Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link></NavItem>
                    <NavItem><Link to="/about" style={{textDecoration: "none", color: "white"}}>Sobre</Link></NavItem>
                    <NavItem><Link to="/contact" style={{textDecoration: "none", color: "white"}}>Contato</Link></NavItem>
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
            <ContentWrapper>
                <PageTitle titleText="Sobre Nós"/>
                <AboutWrapper>
                    <AboutImage className={Style.aboutImagePaper}/>
                    <AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ante eget nulla fermentum tristique. Sed efficitur massa quis sem dictum placerat eget sed mi. Morbi ut neque nec nibh auctor euismod. In ligula massa, egestas ac placerat tempor, finibus eu velit. Curabitur eget scelerisque nunc. Nam finibus neque nec lacus luctus, in aliquet justo mollis. Etiam lobortis enim sed scelerisque ullamcorper. Mauris bibendum arcu quis est fermentum sagittis id vel ex.
Vestibulum hendrerit vestibulum consectetur. Donec sodales turpis id neque suscipit ornare.
                     </AboutText>
                     <AboutLongText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ante eget nulla fermentum tristique. Sed efficitur massa quis sem dictum placerat eget sed mi. Morbi ut neque nec nibh auctor euismod. In ligula massa, egestas ac placerat tempor, finibus eu velit. Curabitur eget scelerisque nunc. Nam finibus neque nec lacus luctus, in aliquet justo mollis. Etiam lobortis enim sed scelerisque ullamcorper. Mauris bibendum arcu quis est fermentum sagittis id vel ex.
Vestibulum hendrerit vestibulum consectetur. Donec sodales turpis id neque suscipit ornare.
                     </AboutLongText>
                     <AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ante eget nulla fermentum tristique. Sed efficitur massa quis sem dictum placerat eget sed mi. Morbi ut neque nec nibh auctor euismod. In ligula massa, egestas ac placerat tempor, finibus eu velit. Curabitur eget scelerisque nunc. Nam finibus neque nec lacus luctus, in aliquet justo mollis. Etiam lobortis enim sed scelerisque ullamcorper. Mauris bibendum arcu quis est fermentum sagittis id vel ex.
Vestibulum hendrerit vestibulum consectetur. Donec sodales turpis id neque suscipit ornare.
                     </AboutText>
                     <AboutImage className={Style.aboutImagePresentation}/>
                </AboutWrapper>
            </ContentWrapper>
        </>
    )
}

export default About