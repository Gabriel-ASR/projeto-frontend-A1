import { BrowserRouter, Link } from 'react-router-dom'
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
import RecentWrapper from '../components/ContentWrapper/Home/RecentWrapper/RecentWrapper.jsx'
import RecentItem from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentItem.jsx'
import RecentContWrapper from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentContWrapper/RecentContWrapper.jsx'
import RecentIcon from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentIcon/RecentIcon.jsx'
import RecentDesc from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentContWrapper/RecentDesc/RecentDesc.jsx'
import RecentTitle from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentContWrapper/RecentTitle/RecentTitle.jsx'
import ReadMore from '../components/ContentWrapper/Home/RecentWrapper/RecentItem/RecentContWrapper/ReadMore/Readmore.jsx'
import NewsWrapper from '../components/ContentWrapper/Home/NewsWrapper/NewsWrapper.jsx'
import FeaturedNews from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeaturedNews.jsx'
import FeatContentWrapper from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatContentWrapper/FeatContentWrapper.jsx'
import FeatDesc from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatContentWrapper/FeatDesc/FeatDesc.jsx'
import FeatTitle from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatContentWrapper/FeatTitle/FeatTitle.jsx'
import FeaturedImage from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatMedia/FeaturedImage/FeaturedImage.jsx'
import FeatAuthor from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatContentWrapper/FeatAuthor/FeatAuthor.jsx'
import FeatCategory from '../components/ContentWrapper/Home/NewsWrapper/FeaturedNews/FeatContentWrapper/FeatCategory/FeatCategory.jsx'
import SecondaryNews from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecondaryNews.jsx'
import SecItem from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecItem.jsx'
import SecCategory from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecContentWrapper/SecCategory/SecCategory.jsx'
import SecAuthor from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecContentWrapper/SecAuthor/SecAuthor.jsx'
import SecTitle from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecContentWrapper/SecTitle/SecTitle.jsx'
import SecDesc from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecContentWrapper/SecDesc/SecDesc.jsx'
import SecImage from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecMedia/SecImage/SecImage.jsx'
import SecContentWrapper from '../components/ContentWrapper/Home/NewsWrapper/SecondaryNews/SecItem/SecContentWrapper/SecContentWrapper.jsx'
import Education from'../assets/education.png'
import Politics from '../assets/politics.png'
import Science from'../assets/science.png'
import Sports from '../assets/sports.png'
import Turismo from '../assets/turismo.png' 

function Home() {
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
            <RecentWrapper>
            <RecentItem>
                <RecentIcon src={Turismo}/>
                <RecentContWrapper>
                    <RecentTitle titleText="Turismo"/>
                    <RecentDesc description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>
                    <ReadMore/>
                </RecentContWrapper>
            </RecentItem>
            <RecentItem>
                <RecentIcon src={Sports}/>
                <RecentContWrapper>
                    <RecentTitle titleText="Esportes"/>
                    <RecentDesc description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>
                    <ReadMore/>
                </RecentContWrapper>
            </RecentItem>
            <RecentItem>
                <RecentIcon src={Education}/>
                    <RecentContWrapper>
                    <RecentTitle titleText="Educação"/>
                    <RecentDesc description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>
                    <ReadMore/>
                </RecentContWrapper>
            </RecentItem>
            <RecentItem>
                <RecentIcon src={Politics}/>
                <RecentContWrapper>
                    <RecentTitle titleText="Política"/>
                    <RecentDesc description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>
                    <ReadMore/>
                </RecentContWrapper>
            </RecentItem>
            <RecentItem>
                <RecentIcon src={Science}/>
                <RecentContWrapper>
                    <RecentTitle titleText="Ciência"/>
                    <RecentDesc description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."/>
                    <ReadMore/>
                </RecentContWrapper>
            </RecentItem>
            </RecentWrapper>
            <NewsWrapper>
                <FeaturedNews>
                    <FeaturedImage/>
                    <FeatContentWrapper>
                        <FeatTitle titleText="CEO do Facebook publica nova declaração sobre vazamento de dados"/>
                        <FeatAuthor authorInfo="por José da Silva | 26/04/2023"/>
                        <FeatCategory category="ESPORTES"/>
                        <FeatDesc Desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"/>
                    </FeatContentWrapper>
                </FeaturedNews>
                <SecondaryNews>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                </SecondaryNews>
                <SecondaryNews>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                    <SecItem>
                    <SecImage/>
                    <SecContentWrapper>
                        <SecTitle titleText="Brasil ganha ouro em Atletismo"/>
                        <SecAuthor authorInfo="por Domingues Rodrigues"/>
                        <SecCategory category="ESPORTES"/>
                        <SecDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
                    </SecContentWrapper>
                    </SecItem>
                </SecondaryNews>
                <FeaturedNews>
                    <FeaturedImage/>
                    <FeatContentWrapper>
                        <FeatTitle titleText="CEO do Facebook publica nova declaração sobre vazamento de dados"/>
                        <FeatAuthor authorInfo="por José da Silva | 26/04/2023"/>
                        <FeatCategory category="ESPORTES"/>
                        <FeatDesc Desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"/>
                    </FeatContentWrapper>
                </FeaturedNews>
            </NewsWrapper>
        </ContentWrapper>
        </>
    )
}

export default Home