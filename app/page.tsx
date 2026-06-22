export default function Home() {
  const features = [
    {
      title: "Device Management",
      description:
        "Register, organize and manage all your IoT devices from a single dashboard.",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Monitor temperature, humidity, voltage, location and telemetry instantly.",
    },
    {
      title: "Dashboard Builder",
      description:
        "Create beautiful dashboards with widgets, charts, gauges and controls.",
    },
    {
      title: "OTA Updates",
      description:
        "Deploy firmware updates remotely without physically accessing devices.",
    },
    {
      title: "API Access",
      description:
        "Integrate your devices and applications using secure REST APIs.",
    },
    {
      title: "Alerts & Automation",
      description:
        "Create intelligent alerts and automate actions based on device events.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">NexusIoT</h1>

        <div className="flex gap-8 text-sm">
          <a href="#">Solutions</a>
          <a href="#">Features</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
            🚀 Open Source • Free Forever
          </span>
        </div>

        <h1 className="text-7xl font-extrabold max-w-6xl leading-tight">
          Connect, Monitor & Scale
          <br />
          Your Entire IoT Ecosystem
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl">
          A modern cloud platform for ESP32, Arduino, Raspberry Pi, LoRa,
          Industrial Sensors and Smart Devices.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl text-black font-semibold">
            Get Started
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl">
            Documentation
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-8 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-8">
            Platform Dashboard Preview
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
              <p className="text-gray-400">Online Devices</p>
              <h3 className="text-4xl font-bold mt-2">1,248</h3>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
              <p className="text-gray-400">Temperature</p>
              <h3 className="text-4xl font-bold mt-2">28°C</h3>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
              <p className="text-gray-400">Humidity</p>
              <h3 className="text-4xl font-bold mt-2">64%</h3>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
              <p className="text-gray-400">Pump Status</p>
              <h3 className="text-4xl font-bold mt-2 text-green-400">ON</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Support */}
      <section className="px-8 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">
            Works With Your Favorite Hardware
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "ESP32",
              "Arduino",
              "Raspberry Pi",
              "LoRa",
              "WiFi",
              "Bluetooth",
              "MQTT",
              "Modbus",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-2xl p-6 bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Forever */}
      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto text-center border border-cyan-500/20 bg-cyan-500/5 rounded-3xl p-10">
          <h2 className="text-5xl font-bold mb-6">Free Forever</h2>

          <p className="text-gray-400 text-lg">
            Unlimited devices, dashboards, analytics and API access.
            Build, experiment and scale your IoT projects without paying.
          </p>
        </div>
      </section>
    </main>
  );
}