import { AnimationControls } from 'framer-motion';

export interface OrnamentType {
  id: string,
  image: string,
  animationControls?: AnimationControls,
}

export interface DynamicOrnamentType {
  id: string;
  data: OrnamentType[];
}
