import { Div } from '@typeDefs/alias';
import { slideOut } from '@utils/animation-util';
import sendEmail from '@utils/email-util';
import { stl } from '@utils/graphics-utils';
import React, { ChangeEventHandler, Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import CardWrapper from './card-wrapper';

type Input = HTMLInputElement | HTMLTextAreaElement;
const SUCCESS_MESSAGE = 'Message Successfully Sent. \n I will get back to you soon. 😃';
const ContactCard: FC = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const cardRef = useRef<Div>();
  const successRef = useRef<HTMLHeadingElement>();
  const onChange = (setVal: Dispatch<SetStateAction<string>>) => {
    const handler: ChangeEventHandler<Input> = (v) => setVal(v.target.value);
    return handler;
  };
  const submitHandler = async () => {
    try {
      const emailObj = { name, email, subject, message };
      await sendEmail(emailObj);
      setError('');
      const onComplete = () => setSuccess(SUCCESS_MESSAGE);
      slideOut(cardRef.current, onComplete);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <p ref={successRef} className="text-xl whitespace-pre-line text-onBase md:text-3xl">
        {success}
      </p>
      <CardWrapper ref={cardRef} style={stl('mx-auto p-5 sm:p-7 md:p-10 max-w-[700px]')}>
        <div className="contact-card-input-wrapper">
          <input placeholder="Your Name" value={name} onChange={onChange(setName)} />
          <input placeholder="Your Email" type="email" value={email} onChange={onChange(setEmail)} />
          <input placeholder="Subject" value={subject} onChange={onChange(setSubject)} />
          <textarea
            className="message-box"
            placeholder="Message"
            value={message}
            onChange={onChange(setMessage)}
          />
        </div>
        {error && <p className="mt-4 text-red-500 md:text-lg">{error}</p>}
        <button className="contact-form-button" type="submit" onClick={submitHandler}>
          Submit
        </button>
      </CardWrapper>
    </>
  );
};

export default ContactCard;
