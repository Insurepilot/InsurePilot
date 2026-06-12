import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-sbi-dark mb-4 tracking-tight">
            A Message From Your <span className="text-sbi-amber">Pilot</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Watch this quick introduction to understand how we secure your family's financial future.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-slate-900 group"
        >
          {/* Note: In a real production app, replace this src with the actual agent's video URL */}
          <video
            ref={videoRef}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnd}
            onClick={togglePlay}
          />
          
          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-sbi-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-sbi-amber text-white hover:bg-amber-400 transition-colors shadow-lg active:scale-95"
            >
              {isPlaying ? <Pause className="w-7 h-7 text-sbi-dark" fill="currentColor" /> : <Play className="w-7 h-7 ml-1 text-sbi-dark" fill="currentColor" />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Big Play Button Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 backdrop-blur-[2px] transition-all">
               <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white text-sbi-dark shadow-2xl shadow-black/50 animate-pulse">
                  <Play className="w-10 h-10 ml-2" fill="currentColor" />
               </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-64 h-64 bg-sbi-blue/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
    </section>
  );
}
