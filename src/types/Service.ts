export type Service = {
  category: string;
  items: ServiceItem[];
}


export type ServiceItem = {
      name: string;
      price?: string;
      duration?: string;
      note?: string;
    }
  | {
      note: string;
      price?: string;
      duration?: string;
      name?: undefined;
  };