import {useState} from 'react';


  
// service id service_i26lpoe
// template id template_l6z9fh7
// public key lxdJvEI2Y9q-mzqxi
const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('form has been submitted' + form);
        alert('form has been submitted');
        setForm({name: '', email: '', message: ''})

    }

    return(
        <div id='contact-page'>
           
           <form id="contact-form" onSubmit={handlesubmit}>
             <h1>CONTACT US</h1>
            <label htmlFor="">FULL NAME:</label>
            <input type="text" value={form.name} placeholder='edmond' onChange={(e) => setForm (e.target.value)} required />

            <label htmlFor="">EMAIL</label>
            <input type="email" value={form.email} placeholder='edmond@gmail.com' onChange={(e) => setForm (e.target.value)} required />

            <label htmlFor="">SEND A MESSAGE</label>
            <textarea name="message" value={form.message} placeholder='i want to trade with you!'  onChange={(e) => setForm (e.target.value)} required />

            <div className='checkbox'>
                <input type="checkbox" />
                <label htmlFor="">I want to get contacted by the agency</label>
            </div>
            <button type='submit'>SUBMIT</button>
           </form>
        </div>
    )
}

export default Contact;