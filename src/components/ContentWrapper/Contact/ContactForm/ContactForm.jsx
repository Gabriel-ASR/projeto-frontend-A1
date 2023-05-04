import Style from './ContactForm.module.css'

function ContactForm(props) {
    return <form className={Style.contactForm}>{props.children}</form>
}

export default ContactForm