export interface PaymentResponse {
  status: 'success' | 'failed';
  transactionId: string;
  email: string;
}

export interface ActivationKey {
  key: string;
  expiresAt: string;
}

export interface EmailData {
  to: string;
  activationKey: string;
  instructions: string;
}