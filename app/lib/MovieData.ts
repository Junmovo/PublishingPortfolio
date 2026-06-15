import { IAIMovieProps } from '../types/PortfolioType';

export const bannerList: IAIMovieProps[] = [
    {
      id: 1,
      title: 'AI 활용 배너 1번',
      imageSrc: '/images/AIMovie/video_1.png',
      videoSrc: '/images/AIMovie/videos/video_1.mp4',
      prompt: `Create a hero banner animation based on the provided image.

Static camera, no camera movement, no zoom, no pan, no tilt, no rotation.

Use the original composition of a futuristic night city skyline with a wide dark blue sky, illuminated high-rise buildings, vertical glowing data light beams rising from the city, and flowing neon wave lines across the lower foreground.

Animate only subtle environmental and graphic motion:
The vertical light beams gently pulse and shimmer upward.
Small light particles softly travel along some of the vertical beams.
The neon wave lines in the foreground flow smoothly from side to side with elegant motion.
Building lights subtly flicker and vary very slightly in brightness.
A soft atmospheric glow and faint haze drift across the skyline.
Very subtle light bloom and shimmer around the brightest points in the city.

Keep the buildings stable and realistic.
Do not distort the skyline.
Do not add people, vehicles, or extra objects.
Maintain the original perspective and framing.
Preserve the large empty dark sky area on the left for hero text overlay.

Style: premium, futuristic, high-tech, smart city, digital network, innovation, corporate technology hero banner.
Mood: modern, sleek, professional, advanced, intelligent, trustworthy.

No sudden motion.
No scene transition.
No camera movement.
Smooth, minimal, elegant animation.
Duration 6–8 seconds.`,
    },
    {
      id: 2,
      title: 'AI 활용 배너 2번',
      imageSrc: '/images/AIMovie/video_2.png',
      videoSrc: '/images/AIMovie/videos/video_2.mp4',
      prompt: `Static camera, soft ambient light, elegant motion,
  minimal floating objects, seamless infinite loop.`,
    },
    {
      id: 3,
      title: 'AI 활용 배너 3번',
      imageSrc: '/images/AIMovie/video_3.png',
      videoSrc: '/images/AIMovie/videos/video_3.mp4',
      prompt: `Premium product mood, subtle movement, clean background,
  cinematic lighting, smooth loop animation.`,
    },
    {
      id: 4,
      title: 'AI 활용 배너 4번',
      imageSrc: '/images/AIMovie/video_4.png',
      videoSrc: '/images/AIMovie/videos/video_4.mp4',
      prompt: `Soft cinematic atmosphere, natural light movement,
  subtle depth, clean composition, seamless loop animation.`,
    },
  //   {
  //     id: 5,
  //     title: 'AI 활용 배너 5번',
  //     imageSrc: '/images/AIMovie/video_5.png',
  //     videoSrc: '/images/AIMovie/videos/video_5.mp4',
  //     prompt: `Elegant visual motion, calm background,
  // smooth animated details, premium mood, no camera movement.`,
  //   },
  //   {
  //     id: 6,
  //     title: 'AI 활용 배너 6번',
  //     imageSrc: '/images/AIMovie/video_6.png',
  //     videoSrc: '/images/AIMovie/videos/video_6.mp4',
  //     prompt: `Static camera, refined lighting, subtle object motion,
  // high quality AI video style, seamless infinite loop.`,
  //   },
];