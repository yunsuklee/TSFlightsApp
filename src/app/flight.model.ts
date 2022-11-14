export interface Flight 
{
  origin: string;
  destination: string;
  flightNumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean
};

// Date type is built into TypeScript