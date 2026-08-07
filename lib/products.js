import { SPORT_IMAGES } from './visuals'

export const products = [
  {
    slug: 'hybrid-short-01', name: 'HYBRID SHORT 01', category: 'MEN / TRAIN', line: 'TRAIN', price: 245,
    image: SPORT_IMAGES.trackStart, altImage: SPORT_IMAGES.heroMen, tag: 'BESTSELLER', gender: 'men',
    description: 'A high-output training short built with airflow panels, a clean athletic cut and unrestricted movement.',
    details: ['Lightweight technical shell', 'Strategic airflow mesh', 'Secure internal drawcord', 'Side split for range of motion'],
  },
  {
    slug: 'oversized-tee-01', name: 'OVERSIZED TEE 01', category: 'MEN / LIFESTYLE', line: 'LIFESTYLE', price: 195,
    image: SPORT_IMAGES.sprintMoody, altImage: SPORT_IMAGES.roadRun, tag: 'CORE', gender: 'men',
    description: 'Heavyweight oversized structure with a sharp shoulder line and signature vertical back branding.',
    details: ['Premium heavyweight cotton', 'Oversized athletic block', 'Ribbed side architecture', 'Signature back wordmark'],
  },
  {
    slug: 'ribbed-sleeveless', name: 'RIBBED SLEEVELESS', category: 'MEN / TRAIN', line: 'TRAIN', price: 175,
    image: SPORT_IMAGES.heroMen, altImage: SPORT_IMAGES.trackStart, tag: 'NEW', gender: 'men',
    description: 'A close ribbed tank that sits clean through the torso and stays locked in through hard sessions.',
    details: ['Dense stretch rib', 'Athletic scoop neck', 'Close body fit', 'Rear woven brand tab'],
  },
  {
    slug: 'run-tank-01', name: 'RUN TANK 01', category: 'MEN / RUN', line: 'RUN', price: 165,
    image: SPORT_IMAGES.roadRun, altImage: SPORT_IMAGES.sprintMoody, tag: 'RUN 01', gender: 'men',
    description: 'Minimal weight, open-back movement and rapid-dry performance for pace work and hot weather.',
    details: ['Rapid-dry performance knit', 'Deep racerback cut', 'Bonded lightweight seams', 'Reflective micro branding'],
  },
  {
    slug: 'contour-top-01', name: 'CONTOUR TOP 01', category: 'WOMEN / STUDIO', line: 'STUDIO', price: 185,
    image: SPORT_IMAGES.womenStretch, altImage: SPORT_IMAGES.womenPortrait, tag: 'NEW', gender: 'women',
    description: 'A sculpted, minimal performance top designed around movement with an adjustable side profile.',
    details: ['Soft compression stretch', 'Adjustable side ruching', 'Sculpted crop length', 'Low-profile tonal mark'],
  },
  {
    slug: 'sculpt-set-01', name: 'SCULPT SET 01', category: 'WOMEN / TRAIN', line: 'TRAIN', price: 385,
    image: SPORT_IMAGES.womenStrength, altImage: SPORT_IMAGES.womenKettlebell, tag: 'DROP 01', gender: 'women',
    description: 'A seamless training system with supportive compression, clean lines and engineered ventilation.',
    details: ['Seamless compression knit', 'High-rise waistband', 'Engineered ventilation', 'Four-way stretch recovery'],
  },
]

export const getProduct = (slug) => products.find((product) => product.slug === slug)
