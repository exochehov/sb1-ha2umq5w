import axios from 'axios';
import { UNDETECT_CONFIG } from '../config/undetect';

export const undetectService = {
  async generateKey(): Promise<string> {
    try {
      const response = await axios.post(
        `${UNDETECT_CONFIG.API_BASE_URL}/keys/create`,
        null,
        {
          params: {
            p: UNDETECT_CONFIG.DEFAULT_PERIOD,
            n: 1,
            pn: UNDETECT_CONFIG.PRODUCT_NAME,
            pp: UNDETECT_CONFIG.PURPOSE
          },
          headers: {
            'Authorization': `Bearer ${UNDETECT_CONFIG.API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to generate key from Undetect.xyz');
      }

      // Response contains a single key since we requested n=1
      return response.data.trim();
    } catch (error) {
      console.error('Failed to generate Undetect.xyz key:', error);
      throw error;
    }
  }
};