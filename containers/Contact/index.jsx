import { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { URLS } from '../../constants/urls';
import Button from '../Button';
import Input from '../Input';
import Title from '../Title';
import { ContactBody, ContactContainer, ContactFeedback, ContactForm } from './styles';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    const { name, email, message } = event.target.elements;
    const data = `name=${name.value}&email=${email.value}&message=${message.value}`;

    await fetch(URLS.form, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setFeedback({ message: 'Thanks! Your message has already been sent.', isError: false });
        } else {
          setFeedback({ message: 'Sorry, an unexpected error occurred :/', isError: true });
        }
      })
      .catch(() => {
        setFeedback({ message: 'Sorry, an unexpected error occurred :/', isError: true });
      })
      .finally(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });

    event.target.reset();
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => setFeedback(null), 5000);
  }, [feedback]);

  return (
    <ContactContainer>
      <ContactBody>
        <Title text="Have a question? Contact me!" color={COLORS.font} padding={'45px 0 0 0'} />
        <ContactForm onSubmit={handleSubmit}>
          <Input name="name" placeholder="Name" margin="0 0 20px 0" isRequired type="text" />
          <Input
            name="email"
            placeholder="Your email"
            margin="0 0 20px 0"
            isRequired
            type="email"
          />
          <Input name="message" placeholder="Message" margin="0 0 20px 0" textArea isRequired />
          <Button text={'SEND'} margin="50px 0 50px 0" isLoading={isLoading} />
          {feedback && (
            <ContactFeedback isError={feedback.isError}>{feedback.message}</ContactFeedback>
          )}
        </ContactForm>
      </ContactBody>
    </ContactContainer>
  );
};

export default Contact;
