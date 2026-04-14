export default function BackgroundTexture() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#0F0F0F]" />

      {/* Paper texture — primary layer, subtle material depth */}
      <div
        className="absolute inset-0 opacity-[0.35] sm:opacity-[0.40]"
        style={{
          backgroundImage: "url('/textures/tile.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          mixBlendMode: "normal",
        }}
      />

      {/* Grain — secondary layer, light printed film finish */}
      <div
        className="absolute inset-0 opacity-[0.025] sm:opacity-[0.03]"
        style={{
          backgroundImage: "url('/textures/grain.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
          filter: "blur(0.3px)",
        }}
      />
    </div>
  );
}
