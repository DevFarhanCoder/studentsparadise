export interface Business {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  theme: {
    gradient: string;
    color: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Course {
  title: string;
  description: string;
  duration: string;
  category: string;
}
