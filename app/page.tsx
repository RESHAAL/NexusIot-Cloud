export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">NexusIoT</h1>

        <div className="flex gap-8 text-sm">
          <a href="#">Solutions</a>
          <a href="#">Features</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="mb-6">
  <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
    🚀 Open Source • Free Forever
  </span>
</div>

        <h1 className="text-7xl font-extrabold max-w-6xl leading-tight">
          Connect, Monitor & Scale
          Your Entire IoT Ecosystem
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl">
          A modern cloud platform for ESP32, Arduino,
          Raspberry Pi, LoRa, Industrial Sensors and
          Smart Devices.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            Get Started
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl">
            Documentation
          </button>
        </div>
      </section>
    </main>
  );
}