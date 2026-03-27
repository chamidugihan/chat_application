import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-md" />
            <div className="relative size-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <MessageSquare className="size-8 text-blue-400" />
            </div>
          </div>
        </div>

        {/* 404 text */}
        <div>
          <h1
            className="text-8xl font-black tracking-tight"
            style={{
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </h1>
          <p className="text-white/50 text-lg font-semibold mt-2">
            Page Not Found
          </p>
          <p className="text-white/30 text-sm mt-1 tracking-wide">
            The page you're looking for doesn't exist
          </p>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px rounded-full bg-blue-500/30" />
          <div className="w-2 h-2 rounded-full bg-blue-500/50" />
          <div className="w-8 h-px rounded-full bg-purple-500/30" />
        </div>

        {/* Back home button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
          }}
        >
          ← Back to Home
        </Link>

        {/* Bouncing dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/20 animate-bounce [animation-delay:0ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-bounce [animation-delay:150ms]" />
          <div className="w-1 h-1 rounded-full bg-white/20 animate-bounce [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
}

export default NotFound;