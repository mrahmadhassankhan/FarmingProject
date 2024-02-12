import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CSS from './Contact.module.css'
import img from '../../images/contact.png'

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleSubject = (e) => {
    setSubject(e.target.value);
  }
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }


  const handleFromEmail = (e) => {
    e.preventDefault();
    console.log(email,name,message,subject)
  }
  return (
    <div>
      <Header />
      <div className={`${CSS['container-fluid']} container-fluid`}>
        <div className='container'>
          <h1 className={CSS['contact-title']}>Contact Us</h1>
          <div className={CSS['contactus-container']}>
            <div className={CSS['contactus-img']}>
              <img className={CSS['img']} src={img} alt='img' />
            </div>
            <div className={CSS['contactus-details']}>
              <form onSubmit={handleFromEmail}>
                <div className={CSS['contactus-name_email-container']}>

                  <div className={CSS['contactus-name-container']}>
                    <label className={CSS['contactus-label']} htmlFor="_fullName">Full Name<span className={CSS['contactus-star']}>*</span></label>
                    <input className={CSS['contactus-name']} type="text" id="_fullName" name="_fullName" onChange={handleName}  value={name} placeholder={'Full Name'} required />
                  </div>

                  <div className={CSS['contactus-name-container']}>
                    <label className={CSS['contactus-label']} htmlFor="_email">Email Address<span className={CSS['contactus-star']}>*</span></label>
                    <input className={CSS['contactus-email']} type="text" id="_email" name="_email" onChange={handleEmail} value={email} placeholder={'Email Address'} required />
                  </div>

                </div>


                <div className={CSS['contactus-subject-container']}>
                  <label className={CSS['contactus-label']} htmlFor="_subject">Subject<span className={CSS['contactus-star']}>*</span></label>
                  <input className={CSS['contactus-subject']} type="text" id="_subject" name="_subject" onChange={handleSubject} value={subject} placeholder={'Subject'} required />
                </div>


                <div className={CSS['contactus-message-container']}>
                  <label className={CSS['contactus-label']} htmlFor="_message">Message<span className={CSS['contactus-star']}>*</span></label>
                  <textarea rows={3} className={CSS['contactus-message']} id="_message" name="_message" onChange={handleMessage} value={message} placeholder={'Message'} required ></textarea>
                </div>


                <button className={CSS['send-btn']} type='button'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact