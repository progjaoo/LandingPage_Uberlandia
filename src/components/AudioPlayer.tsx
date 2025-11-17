import { useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import radioService, { getRadioInfo } from "@/services/radioService";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(radioService.getPlayingState());
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [musicaAtual, setMusicaAtual] = useState("");

  useEffect(() => {
    const unsub = radioService.subscribe((playing) => setIsPlaying(playing));
    return unsub;
  }, []);

  useEffect(() => {
    let ativo = true;

    const carregarInfo = async () => {
      const info = await getRadioInfo();
      if (!ativo || !info) return;
      setMusicaAtual(info.musica_atual);
    };

    carregarInfo();
    const intervalo = setInterval(carregarInfo, 30000);
    return () => {
      ativo = false;
      clearInterval(intervalo);
    };
  }, []);

  const togglePlay = () => radioService.toggle();

  const toggleMute = () => {
    const novoMuted = !isMuted;
    setIsMuted(novoMuted);
    radioService.setVolume(novoMuted ? 0 : volume / 100);
  };

  const handleVolumeChange = (value: number[]) => {
    const novoVol = value[0];
    setVolume(novoVol);
    setIsMuted(novoVol === 0);
    radioService.setVolume(novoVol / 100);
  };

  // Lógica da exibição
  const nomeMusica = musicaAtual?.trim() || "";
  const isInvalido =
    nomeMusica === "" ||
    nomeMusica === "-" ||
    nomeMusica === "" ||
    nomeMusica.toLowerCase().includes("radio maravilha fm") ||
    nomeMusica.startsWith("891");

  let titulo = "";
  let artista = "";

  if (!isInvalido) {
    const partes = nomeMusica.split(" - ");
    titulo = partes[0]?.trim() || "";
    artista = partes[1]?.trim() || "";
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-player-bg rounded-2xl shadow-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between gap-4">
        {/* --- LADO ESQUERDO: Botão + Info --- */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <button
            onClick={togglePlay}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-player-control hover:bg-primary-dark transition-colors flex items-center justify-center shadow-lg hover:scale-105 transform duration-200"
            aria-label="Play/Pause"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="mb-2 ml-3 text-center md:text-left">
              {isInvalido ? (
                <>
                  <h2 className="font-semibold text-foreground text-sm md:text-base">
                    Rádio Maravilha FM - Uberlândia
                  </h2>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-tight">
                    A Rádio de todas as igrejas<br />
                    que toca o som do céu
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                    {titulo}
                  </h3>
                  {artista && (
                    <p className="text-muted-foreground text-xs md:text-sm truncate">
                      {artista}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 w-40 md:w-52">
          <button
            onClick={toggleMute}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-secondary transition-colors flex items-center justify-center"
            aria-label="Volume"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            ) : (
              <Volume2 className="w-10 h-10 md:w-10 md:h-6 text-muted-foreground" />
            )}
          </button>

          <Slider
            value={[isMuted ? 0 : volume]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
