import CardWrapper from '../components/LoginBackground/CardWrapper/CardWrapper.jsx'
import LoginCard from '../components/LoginBackground/CardWrapper/LoginCard/LoginCard.jsx'
import LoginBackground from '../components/LoginBackground/LoginBackground.jsx'
import LogGreeting from '../components/LoginBackground/LogGreeting/LogGreeting.jsx'
import GreetingTitle from '../components/LoginBackground/LogGreeting/GreetingTitle/GreetingTitle.jsx'
import GreetingLogo from '../components/LoginBackground/LogGreeting/GreetingLogo/GreetingLogo.jsx'
import ActionIcon from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionIcon/ActionIcon.jsx'
import LogForm from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogForm.jsx'
import LogQuestion from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/LogQuestion/LogQuestion.jsx'
import LogLabel from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogLabel/LogLabel.jsx'
import LogInput from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogInput/LogInput.jsx'
import LogSubmit from '../components/LoginBackground/CardWrapper/LoginCard/LogForm/LogSubmit/LogSubmit.jsx'
import Style from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionIcon/ActionIcon.module.css'
import ActionTitle from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionTitle/ActionTitle.jsx'
import ActionWrapper from '../components/LoginBackground/CardWrapper/LoginCard/ActionWrapper/ActionWrapper.jsx'

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
                              <ActionIcon className={Style.actionLogin}/>
                              <ActionTitle actionTitle="Log-in"/>
                         </ActionWrapper>
                         <LogForm>
                              <LogLabel htmlFor="username">Usuário:</LogLabel>
                              <LogInput type="text" id="username" name="username"/>
                              <LogLabel htmlFor="password">Senha:</LogLabel>
                              <LogInput type="password" id="password" name="password"/>
                              <LogSubmit/>
                         </LogForm>
                    </LoginCard>
                    <LoginCard>

                    </LoginCard>
               </CardWrapper>
         </LoginBackground> 
    )
}

export default LogRegister