export interface Law {
  id: number;
  ruleNumber: string;
  command: string;
  description: string;
}

export interface CommandMetric {
  title: string;
  value: string;
  subtitle: string;
  medalDetails: string;
  iconName: string;
}

export interface Department {
  name: string;
  designation: string;
  description: string;
  status: string;
  link: string;
  iconName: string;
}

export interface PropagandaMeme {
  id: number;
  title: string;
  tagline: string;
  imageUrl: string;
  stamp: string;
}

export interface TimelineMilestone {
  stepNumber: string;
  title: string;
  objective: string;
  status: 'active' | 'completed' | 'locked';
  clearance: string;
}
