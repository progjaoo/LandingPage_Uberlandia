import { Instagram, Youtube } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href="https://instagram.com/radio89maravilha"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white/40 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6 text-white" />
      </a>
      
      <a
        href="https://youtube.com/@radio89maravilha"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white/40 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="YouTube"
      >
        <Youtube className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default SocialLinks;
