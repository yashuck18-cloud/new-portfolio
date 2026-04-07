import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Locate } from 'lucide-react';

/* ─── Glowing Dot Component ─── */
const GlowDot = ({ size = 'md', color = 'neon', top, left, delay = 0, label }) => {
  const sizes = {
    lg: { dot: 'w-5 h-5', ring: '-inset-5', glow: '-inset-4', pulse: true },
    md: { dot: 'w-3 h-3', ring: '-inset-3', glow: '-inset-2', pulse: false },
    sm: { dot: 'w-2 h-2', ring: '-inset-2', glow: '-inset-1.5', pulse: false },
    xs: { dot: 'w-1.5 h-1.5', ring: '', glow: '-inset-1', pulse: false },
  };
  const colors = {
    neon: { bg: 'bg-neon', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.8),0_0_40px_rgba(57,255,20,0.3)]', ring: 'bg-neon/20', glow: 'bg-neon/15' },
    cyan: { bg: 'bg-cyan-400', shadow: 'shadow-[0_0_12px_rgba(34,211,238,0.7),0_0_30px_rgba(34,211,238,0.3)]', ring: 'bg-cyan-400/20', glow: 'bg-cyan-400/15' },
    amber: { bg: 'bg-amber-400', shadow: 'shadow-[0_0_12px_rgba(251,191,36,0.7),0_0_30px_rgba(251,191,36,0.3)]', ring: 'bg-amber-400/20', glow: 'bg-amber-400/15' },
    rose: { bg: 'bg-rose-400', shadow: 'shadow-[0_0_10px_rgba(251,113,133,0.6)]', ring: 'bg-rose-400/15', glow: 'bg-rose-400/10' },
  };
  const s = sizes[size];
  const c = colors[color];

  return (
    <motion.div
      animate={{ scale: [1, 1.25, 1], opacity: [1, 0.65, 1] }}
      transition={{ duration: 2 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute"
      style={{ top, left }}
    >
      <div className="relative flex items-center justify-center">
        {s.pulse && <div className={`absolute ${s.ring} rounded-full ${c.ring} animate-ping`} style={{ animationDuration: '2.5s' }} />}
        <div className={`absolute ${s.glow} rounded-full ${c.glow} blur-md`} />
        <div className={`${s.dot} rounded-full ${c.bg} ${c.shadow}`} />
      </div>
      {label && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
          <span className="text-[10px] font-bold tracking-wider text-white/80 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">{label}</span>
        </div>
      )}
    </motion.div>
  );
};

/* ─── Main Map Component ─── */
const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16"
    >
      <div className="relative group rounded-2xl overflow-hidden">
        {/* Neon glow border effect */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-neon/30 via-neon/5 to-neon/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        {/* Outer shadow glow */}
        <div className="absolute -inset-4 rounded-3xl bg-neon/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Map container */}
        <div className="relative z-10 rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/5">

          {/* ─── Top Header Bar ─── */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 bg-[#0d1220] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
                <div className="absolute inset-0 rounded-full bg-neon/30 animate-ping" style={{ animationDuration: '2s' }} />
              </div>
              <span className="text-xs font-bold text-white/90 tracking-widest uppercase">Live Location</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-neon" />
                <span className="text-xs text-gray-400 font-medium">Chinnagiripalya, Karnataka</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Navigation size={13} className="text-cyan-400" />
                <span className="text-xs text-gray-500">13.6284° N, 77.3480° E</span>
              </div>
            </div>
          </div>

          {/* ─── Map Area ─── */}
          <div className="relative w-full h-[380px] md:h-[450px]">
            {/* Dark Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4814771489646!2d77.34601917540215!3d13.628450286750715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1b7a6ab81d9bd%3A0x88bc4cda080902d3!2sChinnagiripalya%2C%20Karnataka%20572132!5e0!3m2!1sen!2sin!4v1775112358970!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.3) brightness(0.55) contrast(1.4)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Location"
              className="absolute inset-0"
            />

            {/* Color tint overlays */}
            <div className="absolute inset-0 bg-[#0a0f1a]/30 pointer-events-none mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-transparent to-[#0a0f1a]/60 pointer-events-none" />
            {/* Edge vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(10,15,26,0.8)]" />

            {/* ─── Glowing Dots Overlay ─── */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {/* Main location — center */}
              <GlowDot size="lg" color="neon" top="50%" left="50%" delay={0} />

              {/* Surrounding area markers */}
              <GlowDot size="md" color="cyan" top="28%" left="60%" delay={0.5} />
              <GlowDot size="md" color="cyan" top="62%" left="37%" delay={1.2} />
              <GlowDot size="sm" color="amber" top="22%" left="35%" delay={0.8} />
              <GlowDot size="sm" color="neon" top="70%" left="58%" delay={1.6} />
              <GlowDot size="xs" color="rose" top="38%" left="25%" delay={2} />
              <GlowDot size="xs" color="cyan" top="55%" left="72%" delay={1} />
              <GlowDot size="xs" color="neon" top="80%" left="45%" delay={2.5} />
              <GlowDot size="xs" color="amber" top="18%" left="68%" delay={1.8} />

              {/* ─── Floating Stats Card (top-left) ─── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 left-4"
              >
                <div className="bg-[#0d1220]/85 backdrop-blur-xl rounded-xl p-4 border border-white/[0.06] shadow-xl min-w-[160px]">
                  <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Current Base</p>
                  <p className="text-2xl font-bold text-white leading-none mb-1">Karnataka</p>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon" />
                    <span className="text-[10px] text-neon font-semibold">Available for work</span>
                  </div>
                </div>
              </motion.div>

              {/* ─── Location Label (near center dot) ─── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-[57%] left-1/2 -translate-x-1/2"
              >
                <div className="bg-[#0d1220]/80 backdrop-blur-xl px-4 py-2 rounded-lg border border-neon/20 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
                  <p className="text-neon text-[11px] font-bold tracking-widest text-center whitespace-nowrap flex items-center gap-1.5">
                    <Locate size={12} /> CHINNAGIRIPALYA
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ─── Bottom Legend Bar ─── */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-[#0d1220] border-t border-white/[0.06]">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_6px_rgba(57,255,20,0.5)]" />
                <span className="text-[10px] text-gray-400 font-medium">Home</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
                <span className="text-[10px] text-gray-400 font-medium">Nearby</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                <span className="text-[10px] text-gray-400 font-medium">Landmarks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.5)]" />
                <span className="text-[10px] text-gray-400 font-medium">Points</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-600">© Google Maps • NeonForge</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;
