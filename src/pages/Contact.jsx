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
import ContentWrapper from '../components/ContentWrapper/ContentWrapper.jsx'
import PageTitle from '../components/ContentWrapper/Contact/PageTitle/PageTitle.jsx'
import ContactForm from '../components/ContentWrapper/Contact/ContactForm/ContactForm.jsx'
import FormInput from '../components/ContentWrapper/Contact/ContactForm/InputWrapper/FormInput/FormInput.jsx'
import InputTextArea from '../components/ContentWrapper/Contact/ContactForm/InputWrapper/InputTextArea/InputTextArea.jsx'
import FormLabel from '../components/ContentWrapper/Contact/ContactForm/FormLabel/FormLabel.jsx'
import InputWrapper from '../components/ContentWrapper/Contact/ContactForm/InputWrapper/InputWrapper.jsx'
import SubmitForm from '../components/ContentWrapper/Contact/ContactForm/SubmitForm/SubmitForm.jsx'
import ChannelsWrapper from '../components/DesignExceptions/Contact/ChannelsWrapper/ChannelsWrapper.jsx'
import TopText from '../components/DesignExceptions/Contact/ChannelsWrapper/TopText/TopText.jsx'
import SideText from '../components/DesignExceptions/Contact/ChannelsWrapper/TopText/SideText/SideText.jsx'
import MainText from '../components/DesignExceptions/Contact/ChannelsWrapper/TopText/MainText/MainText.jsx'
import InfoWrapper from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoWrapper.jsx'
import InfoItem from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoItem/InfoItem.jsx'
import InfoDirect from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoItem/InfoDirect/InfoDirect.jsx'
import InfoIcon from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoItem/InfoIcon/InfoIcon.jsx'
import InfoTime from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoItem/InfoTime/InfoTime.jsx'
import InfoTitle from '../components/DesignExceptions/Contact/ChannelsWrapper/InfoWrapper/InfoItem/InfoTitle/InfoTitle.jsx'
import Email from '../assets/e-mail.png'
import Telefone from '../assets/telefone.png'
import Chat from '../assets/chat.png'

import { Link } from 'react-router-dom'

function Contact() {
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
                <PageTitle titleText="Fale Conosco"/>
                    <ContactForm>
                        <InputWrapper>
                            <FormLabel htmlFor="fname">Nome:</FormLabel>
                            <FormInput type="text" id="fname" name="fname" placeholder="Seu nome..."/>
                        </InputWrapper>
                        <InputWrapper>
                            <FormLabel htmlFor="email">E-mail:</FormLabel>
                            <FormInput type="email" id="email" name="email" placeholder="Seu e-mail..."/>
                        </InputWrapper>
                        <InputWrapper>
                            <FormLabel htmlFor="request">Sua solicitação:</FormLabel>
                            <InputTextArea id="request" name="request" placeholder="Sua solicitação..."/>
                        </InputWrapper>
                        <SubmitForm value="Enviar"/>
                    </ContactForm>
            </ContentWrapper>
            <ChannelsWrapper>
                <TopText>
                    <SideText/>
                    <MainText/>
                </TopText>
                <InfoWrapper>
                    <InfoItem>
                        <InfoIcon src={Email}/>
                        <InfoTitle>E-mail</InfoTitle>
                        <InfoTime time="Respondemos em até 6 horas."/>
                        <InfoDirect innerText="contato@noticias.com.br"/>
                    </InfoItem>
                    <InfoItem>
                        <InfoIcon src={Telefone}/>
                        <InfoTitle>Telefone</InfoTitle>
                        <InfoTime time="Disponível das 08h até as 18h."/>
                        <InfoDirect innerText="0800 857 7434"/>
                    </InfoItem>
                    <InfoItem>
                        <InfoIcon src={Chat}/>
                        <InfoTitle>Chat</InfoTitle>
                        <InfoTime time="Atendemos 24 horas por dia!"/>
                        <InfoDirect innerText="(61) 9 8652-7756"/>
                    </InfoItem>
                </InfoWrapper>
            </ChannelsWrapper>
        </>
    )
}

export default Contact