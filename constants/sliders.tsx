import { slider } from "@/types/global";

export const welcomeSliders: slider[] = [
  {
    id: 1,
    title: "Welcome to Our App",
    subtitle: "Discover the Basics",
    text: "Dive into the core features and see what makes our app special.",
    image: require("@/assets/draws/draw1.svg"),
    imageSize: { width: 115, height: 200 },
  },
  {
    id: 2,
    title: "Start Your Journey",
    subtitle: "Get Going",
    text: "Learn tips and tricks to maximize your experience.",
    image: require("@/assets/draws/draw2.svg"),
    imageSize: { width: 195, height: 200 },
  },
  {
    id: 3,
    title: "Ready to Begin!",
    subtitle: "Your Adventure Awaits",
    text: "Begin your journey and explore endless possibilities.",
    image: require("@/assets/draws/draw3.svg"),
    imageSize: { width: 250, height: 120 },
  },
];
