import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #270075, #6d28d9);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  margin: auto auto;
  box-sizing: border-box;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 0.2rem;
  }
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const FormTitle = styled.h2`
  color: #fff;
  font-family: "Arial", sans-serif;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 0.5rem;
  display: block;
  font-family: "Arial", sans-serif;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  min-height: 100px; /* Ensures a good height for textarea */
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #6d28d9;
  color: #fff;
  font-family: "Arial", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #270075;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ff603f;
    }
  }
`;

const ContactForm = () => {
  return (
    <>
      <FormContainer id="contact">
        <FormTitle>Contact Us</FormTitle>
        <StyledForm>
          <FormField>
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" name="firstName" required />
          </FormField>
          <FormField>
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" name="lastName" required />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" required />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
        <SocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialIcons>
      </FormContainer>
    </>
  );
};

export default ContactForm;
