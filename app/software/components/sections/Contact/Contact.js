"use client"
import { useRef, useState } from 'react';
import Section from '../../Section';
import styles from './Contact.module.scss'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
require('dotenv').config()

export default function Contact(props) {
    const getPayload = (subject, email, message) => {
        return {
            subject: subject,
            email: email,
            message: message
        }
    }

    const refSubject = useRef()
    const refEmail = useRef()
    const refMessage = useRef()
    const refReCaptcha = useRef()

    const [payload, setPayload] = useState(getPayload("", "", ""))
    const [wasSubmit, setWasSubmit] = useState(false)
    const [statusMessage, setStatusMessage] = useState("")

    const subjectIsValid = payload.subject.length > 1 
    const emailIsValid = payload.email.length > 1 && payload.email.indexOf('@') > 1
    const messageIsValid = payload.message.length > 1
    
    const handleChange = () => {
        setPayload(getPayload(refSubject.current.value, refEmail.current.value, refMessage.current.value))
    }

    const handleSubmit = async() => {
        setWasSubmit(true)
        if (subjectIsValid && emailIsValid && messageIsValid) {
            const recaptcha = await refReCaptcha.current.executeAsync()
            axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_CONTACT}`, {email: payload, token: recaptcha})
            .then((response) => {
                console.log(response)

                if (response.status === 200) {
                    setStatusMessage(<label className={styles.status}><i>{response.data.message}</i></label>)
                } else {
                    setStatusMessage(<label className={[styles.error, styles.status].join(" ")}><i>{response.data.message}</i></label>)
                }
            })
            setPayload(getPayload("", "", ""))
            setWasSubmit(false)
            refReCaptcha.current.reset()
        }
    }

    return (
        <Section
            heading="contact"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/Contact/"
            footerPath="/blob/master/src/software/components/sections/Academia/Contact.js"
            description={props.descriptions.contact}
        >
            <div className={styles.contact} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.group}>
                    <label>{wasSubmit && !emailIsValid ? <i>Invalid email</i> : <br/>}</label>
                    <input ref={refEmail} className={[styles.field, styles.shadowed, styles.rounded, wasSubmit && !emailIsValid ? styles.invalid : ""].join(" ")}  placeholder='Contact email address...' onChange={handleChange} value={payload.email} type="email" id="email"/>
                </div>
                <div className={styles.group}>
                    <label>{wasSubmit && !subjectIsValid ? <i>Invalid subject</i> : <br/>}</label>
                    <input ref={refSubject} className={[styles.field, styles.shadowed, styles.rounded, wasSubmit && !subjectIsValid ? styles.invalid : ""].join(" ")} placeholder='Subject...' onChange={handleChange} value={payload.subject} type="text" id="subject"/>
                </div>
                <div className={styles.group}>
                    <label>{wasSubmit && !messageIsValid ? <i>Invalid message</i> : <br/>}</label>
                    <textarea ref={refMessage} className={[styles.shadowed, styles.rounded, wasSubmit && !messageIsValid ? styles.invalid : ""].join(" ")}  onChange={handleChange} value={payload.message}/>
                </div>    
                <div className={styles.group}>
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY} ref={refReCaptcha} size="invisible"/>
                    {statusMessage}&nbsp;
                    <button onClick={handleSubmit} disabled={wasSubmit && (!messageIsValid || !emailIsValid || !subjectIsValid)} className={[styles.submit, styles.field, styles.shadowed, styles.rounded].join(" ")}>Send</button>
                </div>
            </div>
        </Section>
    );
}
