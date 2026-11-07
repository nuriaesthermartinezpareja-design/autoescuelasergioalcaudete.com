export interface PermitInfo {
  id: 'b' | 'moto' | 'otros';
  title: string;
  badge?: string;
  subtitle: string;
  description: string;
  features: string[];
  requirements: string[];
  examSummary: string[];
  ageMin: string;
}

export interface BookingSlot {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm h
  serviceType: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
  id?: string;
  createdAt?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatarLetter: string;
  stars: number;
  highlight: string;
  text: string;
  verifiedGoogle: boolean;
  date: string;
}

export interface SergioBotOption {
  label: string;
  icon?: string;
  nextStep: string;
}

export interface BotMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: SergioBotOption[];
  recommendation?: {
    permitId: 'b' | 'moto' | 'otros';
    title: string;
    description: string;
    recommendedReason: string;
  };
}
