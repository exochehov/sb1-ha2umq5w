import axios from 'axios';
import { EmailData } from '../types/payment';
import { OVERPAY_CONFIG } from '../config/overpay';

export const emailService = {
  async sendActivationEmail(emailData: EmailData) {
    try {
      const response = await axios.post(
        `${OVERPAY_CONFIG.API_BASE_URL}/notifications/email`,
        emailData,
        {
          headers: {
            'Authorization': `Bearer ${OVERPAY_CONFIG.SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to send activation email:', error);
      throw error;
    }
  }
};