import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from './assets/js_logo.png';

const FloatingLogo = ({ src, initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);
  
  useEffect(() => {
    const moveRandomly = () => {
      const newX = Math.random() * 100;
      const newY = Math.random() * 100;
      setPosition({ x: newX, y: newY });
    };
    
    const interval = setInterval(moveRandomly, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <img
      src={src}
      className="absolute w-8 h-8 opacity-50 transition-all duration-[5000ms] ease-in-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      alt="Floating logo"
    />
  );
};

function App() {
  const logos = [viteLogo, reactLogo, jsLogo];
  const floatingLogos = Array(12).fill(null).map((_, i) => ({
    src: logos[i % 3],
    initialPosition: {
      x: Math.random() * 100,
      y: Math.random() * 100
    }
  }));

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 relative overflow-hidden">
      {floatingLogos.map((logo, index) => (
        <FloatingLogo key={index} src={logo.src} initialPosition={logo.initialPosition} />
      ))}

      <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative">
        <div className="flex items-center justify-center w-full">
          <div className="flex space-x-8 items-center">
            <img 
              src={viteLogo} 
              className="h-16 w-16 transition-transform duration-300 hover:rotate-12" 
              alt="Vite logo" 
            />
            <span className="text-3xl font-light text-zinc-400">+</span>
            <img 
              src={reactLogo} 
              className="h-16 w-16 transition-transform duration-300 hover:rotate-12" 
              alt="React logo" 
            />
            <span className="text-3xl font-light text-zinc-400">+</span>
            <img 
              src={jsLogo} 
              className="h-16 w-16 transition-transform duration-300 hover:rotate-12" 
              alt="JavaScript logo" 
            />
          </div>
        </div>

        <div className="text-center max-w-5xl w-full my-12">
          <div className="mx-auto w-fit rounded-xl border border-zinc-700 bg-zinc-800/80 p-4 backdrop-blur-sm">
            <p className="text-zinc-300 font-light tracking-wide">
              Get started by editing&nbsp;
              <code className="font-mono text-zinc-100 bg-zinc-700 px-2 py-1 rounded">src/App.jsx</code>
            </p>
          </div>
        </div>

        <div className="grid max-w-4xl w-full gap-6 text-center lg:grid-cols-2">
          {[
            {
              href: "https://vitejs.dev",
              title: "Documentation",
              description: "Find in-depth information about Vite and React features and API."
            },
            {
              href: "https://react.dev/learn",
              title: "Learn",
              description: "Learn about React in an interactive course with quizzes!"
            },
            {
              href: "https://tailwindcss.com",
              title: "Components",
              description: "Explore Tailwind CSS templates and components."
            },
            {
              href: "https://vercel.com/",
              title: "Deploy",
              description: "Deploy your Vite site to a hosting platform of your choice."
            }
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-zinc-700 bg-zinc-800/80 p-6 transition-all duration-300 hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-900/50 hover:border-zinc-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-xl font-light tracking-tight">
                {item.title}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-zinc-400">
                  →
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] mx-auto text-sm text-zinc-300 font-light">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;