export enum WasteCategory {
  ORGANIK = 'Organik',
  ANORGANIK = 'Anorganik',
  RESIDU = 'Residu/B3'
}

export interface WasteGuideItem {
  id: string;
  name: string;
  category: WasteCategory;
  description: string;
  disposalMethod: string;
  icon: string; // Emoji or icon name
}

export interface UMKMProduct {
  id: string;
  name: string;
  shopName: string;
  pointsCost: number;
  imageUrl: string;
  description: string;
}

export interface UserState {
  points: number;
  history: PointHistory[];
}

export interface PointHistory {
  id: string;
  date: string;
  description: string;
  amount: number; // positive for earn, negative for spend
  type: 'EARN' | 'SPEND';
}

export interface ScanResult {
  itemName: string;
  category: WasteCategory;
  confidence: number;
  advice: string;
  pointsAwarded: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface EcoTip {
  title: string;
  content: string;
  icon: string;
}