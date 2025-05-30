
import React from "react";

export default function App() {
  return (
    <div className="bg-[#0b2c2c] text-white font-sans">
      <header className="flex justify-between items-center p-6 bg-[#0e3a3a]">
        <h1 className="text-2xl font-bold text-[#e6e6e6]">PULSE</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-[#b8d8d8] hover:text-white">Features</a>
          <a href="#about" className="text-[#b8d8d8] hover:text-white">About</a>
          <a href="#contact" className="text-[#b8d8d8] hover:text-white">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-[#0b2c2c]">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-[#7ae6e6]">
            Your AI-powered health coach, personalized for you
          </h2>
          <p className="text-[#c4e3e3] mb-6">
            Achieve better physical and mental well-being with real-time, tailored guidance from your own AI coach.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#33cccc] to-[#9b5de5] text-white rounded hover:opacity-90">Get Started</button>
        </div>
        <img src="/ai-chat-example.png" alt="AI Coach Chat" className="w-full md:w-1/2 mt-10 md:mt-0 rounded-lg shadow-xl" />
      </section>

      <section id="features" className="px-6 py-16 text-center bg-[#123737]">
        <h3 className="text-3xl font-bold text-white mb-8">Why Pulse?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-2">⭐</div>
            <h4 className="font-bold text-lg text-[#7ae6e6]">Personalized Support</h4>
            <p className="text-[#d1f7f7]">Get recommendations tailored to your goals and lifestyle.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📈</div>
            <h4 className="font-bold text-lg text-[#7ae6e6]">Insights & Tracking</h4>
            <p className="text-[#d1f7f7]">Track your habits and see progress over time.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">❤️</div>
            <h4 className="font-bold text-lg text-[#7ae6e6]">Daily Motivation</h4>
            <p className="text-[#d1f7f7]">Get reminders and coaching to keep you going.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gradient-to-r from-[#33cccc] to-[#9b5de5] text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Start improving your health with Pulse</h3>
        <button className="px-6 py-3 bg-white text-[#0b2c2c] rounded font-semibold hover:bg-gray-100">Sign Up</button>
      </section>

      <footer className="px-6 py-6 bg-[#0e3a3a] text-center text-sm text-[#b8d8d8]">
        © 2025 Pulse. All rights reserved.
      </footer>
    </div>
  );
}
