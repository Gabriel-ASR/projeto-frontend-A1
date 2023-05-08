import CardWrapper from '../components/LoginBackground/CardWrapper/CardWrapper.jsx'
import LoginCard from '../components/LoginBackground/CardWrapper/LoginCard/LoginCard.jsx'
import LoginBackground from '../components/LoginBackground/LoginBackground.jsx'
import LogGreeting from '../components/LoginBackground/LogGreeting/LogGreeting.jsx'
import GreetingTitle from '../components/LoginBackground/LogGreeting/GreetingTitle/GreetingTitle.jsx'
import GreetingLogo from '../components/LoginBackground/LogGreeting/GreetingLogo/GreetingLogo.jsx'
import ActionIcon from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionIcon/ActionIcon.jsx'
import LogForm from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogForm.jsx'
import LogQuestion from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/LogQuestion/LogQuestion.jsx'
import LogLabel from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/InputLogWrapper/LogLabel/LogLabel.jsx'
import LogInput from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/InputLogWrapper/LogInput/LogInput.jsx'
import LogSubmit from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogSubmit/LogSubmit.jsx'
import Style from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionIcon/ActionIcon.module.css'
import ActionTitle from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionTitle/ActionTitle.jsx'
import ActionWrapper from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionWrapper.jsx'
import Logicon from '../assets/profile-user.png'
import SignIcon from '../assets/enter.png'
import InputLogWrapper from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/InputLogWrapper/InputLogWrapper.jsx'

function LogRegister() {
    return (
         <LoginBackground>
               <LogGreeting>
                    <GreetingTitle/>
                    <GreetingLogo>

                    </GreetingLogo>
               </LogGreeting>
               <CardWrapper>
                    <LoginCard>
                         <ActionWrapper>
                              <LogQuestion innerText="Já é assinante?"/>
                              <ActionIcon src={Logicon}/>
                              <ActionTitle actionTitle="Log-in"/>
                         </ActionWrapper>
                         <LogForm>
                              <InputLogWrapper>
                                   <LogInput type="text" id="username" name="username" placeholder="Digite seu usuário..."/>
                              </InputLogWrapper>
                              <InputLogWrapper>
                                   <LogInput type="password" id="password" name="password" placeholder="Digite sua senha..."/>
                              </InputLogWrapper>
                              <LogSubmit value="Entrar"/>
                         </LogForm>
                    </LoginCard>
                    <LoginCard>
                         <ActionWrapper>
                              <LogQuestion innerText="Ainda não tem conta?"/>
                              <ActionIcon src={SignIcon}/>
                              <ActionTitle actionTitle="Registrar"/>
                         </ActionWrapper>
                         <LogForm>
                              <InputLogWrapper>
                                   <LogInput type="text" id="username" name="username" placeholder="Digite seu usuário..."/>
                              </InputLogWrapper>
                              <InputLogWrapper>
                                   <LogInput type="password" id="password" name="password" placeholder="Digite sua senha..."/>
                              </InputLogWrapper>
                              <InputLogWrapper>
                                   <LogInput type="password" id="password" name="password" placeholder="Confirme sua senha..."/>
                              </InputLogWrapper>
                              <LogSubmit value="Registrar"/>
                         </LogForm>
                    </LoginCard>
               </CardWrapper>
         </LoginBackground> 
    )
}

export default LogRegister