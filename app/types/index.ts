export interface CompanyData {
  company: string;
  marketPrice: number;
  estValuation: number;
  vsLastRound: string;
  performance3M: string;
  lastPrimaryRound: {
    Amount: string;
    volume: string;
    date: string;
  };
  lastTrade: {
    Amount: string;
    volume: string;
    date: string;
  };
  recentTradingHistory: {
    Amount: string;
    volume: string;
    bid_volume: string;
  };
}

export interface NewsDatatype {
  company: string;
  headline: string;
  sector: string;
  date: string;
  sentiment: string;
}

export interface TradeDataType {
  company: string;
  type: string;
  closedDate: string;
  uploadDate: string;
  pricePerShare: number;
  estValuation: string;
  priceVsLastRound: string;
  priceVsMarketPrice: string | null;
  volume: string;
  structure: string;
  shareClass: string;
}

export interface MarketDataType {
  company: string;
  type: string;
  price: number;
  priceVsMarket: string;
  priceVsLast: string;
  size: string;
  structure: string;
  shareClass: string;
  source: string;
  updated: string;
  submitted: string;
}
