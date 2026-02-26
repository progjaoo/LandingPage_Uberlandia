import SocialLinks from "@/components/SocialLinks";
import bgDesktop from "@/assets/bg-desktop.png";
import bgMobile from "@/assets/bg-mobile.png";
import logoSite from "@/assets/logoSite.svg";
import { Link } from "react-router-dom";
import { Radio } from "lucide-react";

const Video = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section 
        className="relative bg-primary py-3 md:py-3 px-3 overflow-hidden"
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${bgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto max-w-5x1">
          <div className="flex justify-center mb-10 animate-fade-in">
            <img
              src={logoSite}
              alt="Logo Rádio"
              className="w-50 md:w-100"
            />
          </div>
           
          <h1 className="text-1x1 text-white text-center mb-8 md:mb-10 animate-fade-in px-4">
            Assista ao vivo direto do estúdio
            <br />
            da Rádio 89.7 Maravilha FM!
          </h1>

          <div className="mb-8 md:mb-12 animate-fade-in">
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="relative -mt-8 md:-mt-10 px-4 z-20 animate-scale-in">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-6">
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://player.srvstm.com/camera-studio/7076/VjFST1RtVkZlSFZVYm14clltczBkMWxzVFRGaGJVbDVUVVF3UFE9PStS/16:9/true?autoplay=1" 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay"
              />
            </div>
            
            <div className="mt-4 flex justify-center">
              <Link 
                to="/"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Radio size={20} />
                Ouvir Rádio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-background py-12 md:py-16 px-4 flex-1">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Acompanhe em tempo real tudo o que acontece no estúdio da Rádio 89.7 Maravilha FM. 
            Uma experiência única para você que ama nossa programação!
          </p>
        </div>
      </section> */}

      <footer className="bg-primary py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src={logoSite}
                alt="Logo Rádio Maravilha"
                className="w-20 animate-fade-in"
              />
            </div>

            <div className="text-white space-y-2 md:text-right">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//Av.+Ces%C3%A1rio+Alvim,+818+-+Centro,+Uberl%C3%A2ndia+-+MG,+38400-098/@-18.9166706,-48.3548947,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94a445efc6a95ae9:0x9807940a374876b9!2m2!1d-48.272493!2d-18.9166888?entry=ttu"
                className="hover:underline"
              >
                <p className="text-sm md:text-base leading-snug">
                  Avenida Cesário Alvim, 818, loja 25, 26 e 27, Edifício 2000<br />
                  Centro, Uberlândia - MG
                </p>
              </a>

              <p className="text-xs text-gray-200 mt-2">
                © 2025 Rádio 89.7 Maravilha FM — Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Video;
