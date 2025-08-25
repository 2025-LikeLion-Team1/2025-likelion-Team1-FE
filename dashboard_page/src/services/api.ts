import { getConfig } from '../config/environment';
import { Question } from '../types';

const config = getConfig();

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || config.apiUrl;
  }

  async getRepresentativeQuestions(skip: number = 0, limit: number = 10): Promise<Question[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/questions/representative?skip=${skip}&limit=${limit}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch representative questions:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
