import "./App.css";
import ayushImg from "./assets/Ayush.png";

export default function App() {
  const likes = [
    "💻 Coding",
    "📚 Obscure English Words",
    "🐧 Linux & CLI Tools",
    "🖼️ Wallpaper Hunting",
    "✨ Clean UI",
    "🌸 Anime Girls",
    "🎹 Music Production",
    "🎬 Movies",
    "🗣️ Talking with Cousins",
    "🎨 Horrifying Drawings",
    "🎧 Getting Lost in Music",
    "🌙 Anime Wallpapers",
    "😄 Having Fun"
  ];

  return (
    <div className="container">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="card">
        <div className="hero">
          <div className="hero-text">
            <p className="small">Just a casual person on the internet</p>

            <h1>
              Hey, I'm <span>Ayush</span>
            </h1>

            <p className="intro">
              Not particularly smart, friendly, or socially gifted just a curious and slightly boring guy who spends too much time coding, collecting weird English words, customizing Linux setups, and thinking about random things at 2 AM.
            </p>
          </div>
          <img src={ayushImg} alt="Ayush" className="hero-img" />
        </div>

        <div className="section">
          <h2>About Me</h2>

          <p>
            My name is Ayush Namdev. I am not so friendly, smart, or overly social, but
            I am a situational extrovert, prevaricative, submissive, sometimes
            autophobic, and who knows, perhaps an Atychiphobic, Dystychiphobic,
            or even a Claustrophobic guy that does some little things and
            becomes happier as a logophile for no particular reason, perhaps
            because countless incomprehensibilities seem to come out of nowhere
            and keep running through my mind simultaneously.
          </p>
        </div>

        <div className="section">
          <h2>Things I Like</h2>

          <div className="tags">
            {likes.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Current Status</h2>

          <div className="status-feed">
            <div className="status-item">
              <span className="status-dot pulse-blue"></span>
              <p>Unchehara, Satna (M.P) India</p>
            </div>
            <div className="status-item">
              <span className="status-dot pulse-green"></span>
              <p>Average typing speed: 80+ WPM</p>
            </div>
            <div className="status-item">
              <span className="status-dot pulse-purple"></span>
              <p>Most productive after sunset</p>
            </div>
            <div className="status-item">
              <span className="status-dot pulse-indigo"></span>
              <p>Currently expanding vocabulary</p>
            </div>
          </div>
        </div>


        <div className="section">
          <h2>Gear I Use</h2>
        
          <div className="gear-grid">
            <div className="gear-card">
              <div className="gear-info">
                <span className="gear-label">Laptop</span>
                <span className="gear-name">MacBook Air M2</span>
                <p>Main powerhouse for coding and daily tasks.</p>
              </div>
            </div>
            <div className="gear-card">
              <div className="gear-info">
                <span className="gear-label">Mobile</span>
                <span className="gear-name">Moto G54 5G</span>
                <p>My daily driver that survives somehow.</p>
              </div>
            </div>
            <div className="gear-card">
              <div className="gear-info">
                <span className="gear-label">Display</span>
                <span className="gear-name">Samsung Monitor</span>
                <p>Because one screen is never enough.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Fun Facts About Me</h2>

          <div className="facts-container">
            <div className="fact-card">
              <span className="fact-number">01</span>
              <p>I can spend hours exploring obscure English words that most people will never use.</p>
            </div>
            
            <div className="fact-card">
              <span className="fact-number">02</span>
              <p>I can spend hours creating horrifying drawings that look like they belong in a nightmare rather than an art gallery.</p>
            </div>
            
            <div className="fact-card">
              <span className="fact-number">03</span>
              <p>I genuinely enjoy customizing software more than actually using it sometimes.</p>
            </div>
            
            <div className="fact-card">
              <span className="fact-number">04</span>
              <p>If Linux has 100 distros, I somehow want to try all 100.</p>
            </div>
            
            <div className="fact-card">
              <span className="fact-number">05</span>
              <p>I can talk about movies, coding, vocabulary, human behavior and obviously romantic things for hours.</p>
            </div>
            
            <div className="fact-card">
              <span className="fact-number">06</span>
              <p>I keep searching for the perfect wallpaper even though I already have one.</p>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2>Find Me On</h2>

          <div className="links">
            <a
              className="link-card"
              href="https://github.com/ayusshere"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-header">
                <svg className="link-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <h3>GitHub</h3>
              </div>
              <p>@ayusshere</p>
            </a>

            <a
              className="link-card"
              href="https://instagram.com/ayussync"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-header">
                <svg className="link-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
                <h3>Instagram</h3>
              </div>
              <p>@ayussync</p>
            </a>

            <a
              className="link-card"
              href="https://www.youtube.com/@ayusync"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-header">
                <svg className="link-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
                <h3>YouTube</h3>
              </div>
              <p>@ayusync</p>
            </a>
          </div>
        </div>

        <footer>Made with frustration, overthinking, and 42°C weather.</footer>
      </div>
    </div>
  );
}
