import axios from "axios";

const validateRecaptcha = async (recaptchaToken) => {
  const secretKey = "YOUR_SECRET_KEY"; // Sua chave secreta do reCAPTCHA

  const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
    params: {
      secret: secretKey,
      response: recaptchaToken,
    },
  });

  return response.data.success; 
};