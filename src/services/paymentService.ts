import axios from 'axios';
import { OVERPAY_CONFIG } from '../config/overpay';
import { emailService } from './emailService';
import { undetectService } from './undetectService';
import { PaymentResponse } from '../types/payment';

export const paymentService = {
  async initiatePayment() {
    try {
      window.location.href = OVERPAY_CONFIG.PAYMENT_URL;
    } catch (error) {
      console.error('Payment initiation failed:', error);
      throw error;
    }
  },

  async handlePaymentSuccess(paymentData: PaymentResponse) {
    try {
      // Generate Undetect.xyz key
      const activationKey = await undetectService.generateKey();

      // Prepare email data
      const emailData = {
        to: paymentData.email,
        activationKey: activationKey,
        instructions: `
          Thank you for your purchase! Here's your activation key and instructions:
          
          Activation Key: ${activationKey}
          Valid for: 24 hours
          
          Instructions:
          1. Launch EFT CHAMS
          2. Enter your activation key when prompted
          3. Enjoy your premium features!
          
          Important Notes:
          - Your key is valid for 24 hours from activation
          - For technical support, please contact our support team
          - Do not share your key with others
          
          If you have any questions, please contact our support team.
        `
      };

      // Send activation email
      await emailService.sendActivationEmail(emailData);

      return { success: true, message: 'Activation key sent successfully' };
    } catch (error) {
      console.error('Failed to process payment success:', error);
      throw error;
    }
  }
};