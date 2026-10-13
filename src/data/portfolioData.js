import { Network, ShieldCheck, Terminal, BriefcaseBusiness } from 'lucide-react';

export const projects = [
  {
    year: '2026',
    icon: Network,
    title: 'Basic Network Sniffer',
    description: 'Live traffic visibility built for learning how protocols communicate under the hood.',
    bullets: ['Captured & analyzed DNS, DHCP, HTTP and TLS metadata', 'Protocol-based filtering and PCAP export', 'Built in a Kali Linux environment'],
    tags: ['Python', 'Scapy', 'Kali Linux']
  },
  {
    year: '2026',
    icon: ShieldCheck,
    title: 'Phishing Detection Tool',
    description: 'A web tool that turns suspicious URLs into actionable risk signals.',
    bullets: ['URL phishing-indicator checks and risk classification', 'HTML analysis detects fake login forms', 'Threat scoring and event logging'],
    tags: ['Python', 'Flask', 'BeautifulSoup']
  },
  {
    year: '2026',
    icon: Terminal,
    title: 'Endpoint Security Simulation',
    description: 'A controlled study of local host signals and how SOC teams respond to them.',
    bullets: ['Analyzed credential-theft risk indicators', 'Examined local logging behaviors', 'Mapped findings to detection and response patterns'],
    tags: ['Python', 'Security Ops', 'Logging']
  },
  {
    year: '2025',
    icon: Network,
    title: 'SOHO Network Design',
    description: 'A resilient small-office lab modeled, connected, and troubleshot in simulation.',
    bullets: ['VLANs, subnetting and inter-VLAN routing', 'DHCP configuration and connectivity testing', 'Structured troubleshooting workflow'],
    tags: ['Cisco PT', 'VLANs', 'DHCP']
  },
  {
    year: '2026',
    icon: BriefcaseBusiness,
    title: 'OOP Master Learning App',
    description: 'A mobile learning platform for making C++ practice more structured and engaging.',
    bullets: ['Authentication, reset and Google sign-in', 'Quizzes, bookmarks and progress tracking', 'In-app C++ compiler with protected data access'],
    tags: ['React Native', 'Expo', 'Supabase']
  }
];

export const skillGroups = [
  {
    title: 'Cybersecurity & SOC',
    items: ['Network Traffic Analysis', 'Packet Analysis (TCP/IP)', 'Threat Detection', 'Log Analysis', 'Phishing Detection', 'Endpoint Security Concepts']
  },
  {
    title: 'Networking',
    items: ['VLAN Configuration', 'Subnetting', 'DHCP', 'Basic Routing', 'Cisco Packet Tracer']
  },
  {
    title: 'Tools',
    items: ['Wazuh Dashboard (Learning)', 'Kali Linux (Basic)', 'Python', 'Flask', 'BeautifulSoup', 'Scapy']
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'Expo Router', 'TypeScript', 'Supabase Auth', 'Supabase RLS']
  }
];

export const certifications = [
  ['2026', 'Cyber Security Internship', 'DevelopersHub Corporation'],
  ['2025', 'CyberOps Associate', 'Cisco · SMIT'],
  ['2025', 'Junior Cybersecurity Analyst Career Path', 'Cisco · SMIT'],
  ['2025', 'Network Technician Career Path', 'Cisco · SMIT'],
  ['2025', 'Introduction to Cybersecurity', 'Cisco · SMIT']
];
