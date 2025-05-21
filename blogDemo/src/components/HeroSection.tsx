import React, { useState } from "react";
import tableMountain from "../assets/tableMountain.jpg";
import ModalAlert from "../components/ModalAlert";

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      setEmail("");
      setAlertMessage("Thank you for subscribing!");
    }
  };

  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-16 text-white relative"
        style={{
          backgroundImage: `url(${tableMountain})`,
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-6">
            Subscribe to receive the latest posts directly in your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 w-full sm:w-auto rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Modal Alert popup */}
      {alertMessage && (
        <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
      )}
    </>
  );
};

export default HeroSection;
