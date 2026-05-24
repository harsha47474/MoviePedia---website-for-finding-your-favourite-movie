import { User, Mail, Globe, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express", "Vite", "REST APIs"
  ];

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Page Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About <span className="text-[var(--primary)]">Me</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Meet the developer behind MoviePedia.
          </p>
        </div>

        {/* Profile Card */}
        <Card className="border-none bg-card backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <CardContent className="p-0 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            {/* Left: Avatar Placeholder */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[var(--primary)]/10 border-2 border-[var(--primary)]/30 flex items-center justify-center shrink-0 shadow-lg text-[var(--primary)]">
              <User className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>

            {/* Right: Bio & Info */}
            <div className="space-y-6 flex-1">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white">N. Harshavardan</h2>
                <p className="text-sm text-[var(--primary)] font-semibold uppercase tracking-wider">
                  Full Stack Developer
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Hi, I'm Harshavardan. I built MoviePedia as a modern, interactive web application
                to search and explore movies, TV shows, and anime. Leveraging clean components, responsive layouts,
                and TMDb integrations, this application provides an optimized user experience across devices.
              </p>

              {/* Skills Section */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-2 justify-center md:justify-start">
                  <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold bg-white/[0.04] border border-white/5 text-white/90 rounded-full px-3 py-1 hover:bg-white/[0.08] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contacts / Links */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start text-sm">
                <a
                  href="mailto:harshavardan@example.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors py-1 px-3 bg-white/[0.02] hover:bg-white/[0.06] rounded-xl border border-white/5"
                >
                  <Mail className="w-4 h-4 text-[var(--primary)]" />
                  <span>Email</span>
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors py-1 px-3 bg-white/[0.02] hover:bg-white/[0.06] rounded-xl border border-white/5"
                >
                  <Globe className="w-4 h-4 text-[var(--primary)]" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer note */}
        <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
}
