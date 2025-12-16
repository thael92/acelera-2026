import { StrategyStep, VideoThumbnail, Stat, ServiceItem } from './types';
import { Camera, Mic, Video, Share2, BookOpen, Briefcase, Cast } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Soluções', href: '#strategy' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#social-proof' },
];

export const STRATEGY_STEPS: StrategyStep[] = [
  {
    number: '1',
    title: 'Ofereça conteúdo de valor',
    description: 'Desenvolvimento de materiais personalizados com COPY e DESIGN profissional.'
  },
  {
    number: '2',
    title: 'Aumente Visibilidade e agendamentos',
    description: 'Anúncios segmentados para atrair e coletar leads altamente qualificados'
  },
  {
    number: '3',
    title: 'Remarketing Inteligente',
    description: 'Uso dos dados coletados para direcionar novas comunicações a visitantes.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: Camera,
    title: 'Studio Fotográfico',
    description: 'Ensaios corporativos e profissionais para elevar sua imagem pessoal.'
  },
  {
    icon: Mic,
    title: 'Studio de Podcast',
    description: 'Estrutura completa de áudio e vídeo para gravação do seu conteúdo.'
  },
  {
    icon: Cast,
    title: 'Studio Móvel em Eventos',
    description: 'Levamos nossa estrutura de Podcast e Foto para cobrir seu evento in loco.'
  },
  {
    icon: Share2,
    title: 'Gestão de Social Media',
    description: 'Planejamento estratégico e gestão completa das suas redes sociais.'
  },
  {
    icon: Video,
    title: 'Edição de Vídeo & Motion',
    description: 'Edição profissional para cursos, vídeos institucionais e reels.'
  },
  {
    icon: BookOpen,
    title: 'Editorial & Ebooks',
    description: 'Diagramação e edição de livros físicos e digitais (Ebooks).'
  },
  {
    icon: Briefcase,
    title: 'Papelaria Corporativa',
    description: 'Mídia kits, pastas, cartões e materiais de apoio para palestras.'
  }
];

export const VIDEOS: VideoThumbnail[] = [
  {
    id: 'main',
    title: 'Confidesign',
    thumbnail: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isMain: true
  },
  {
    id: 'v1',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v2',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v3',
    thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  }
];

export const STATS: Stat[] = [
  { value: '500', suffix: '+', label: 'Clientes' },
  { value: '98', suffix: '%', label: 'Satisfação' },
  { value: '10', suffix: 'M+', label: 'Leads' },
  { value: '24', suffix: '/7', label: 'Suporte' },
];