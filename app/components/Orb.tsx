import React from 'react';

const Orb: React.FC = () => {
  return (
    <div
      className="relative flex justify-center items-center w-screen"
      style={{height: 'calc(100vh - 64px)'}}
    >
      <div className="absolute inset-0 flex items-center justify-center text-4xl z-50">
        <span className="text-transparent bg-clip-text bg-gradient-to-r via-[#DF843D] to-[#3D7D46] from-[#D63C33] font-mono hover:underline hover:text-white hover:cursor-pointer">
          enter
        </span>
      </div>
      <div className="orb p-20 aspect-square"></div>
      <style>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        :root {
          --bg: #ffffff;       /* White background */
          --c1: #DF843D;       /* Orange */
          --c2: #3D7D46;       /* Green */
          --c3: #2B2C6F;       /* Blue */
          --c4: #D63C33;       /* Red */
        }

        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          display: grid;
          place-items: center;
          font-family: system-ui, sans-serif;
          background-color: var(--bg);
        }

        .orb {
          display: grid;
          grid-template-areas: "stack";
          inline-size: min(80vmin, 100%);
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 50%;
        }

        .orb::before,
        .orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }

        .orb::before {
          background:
            conic-gradient(from calc(var(--angle) * 2) at 25% 70%, var(--c3), transparent 20% 80%, var(--c3)),
            conic-gradient(from calc(var(--angle) * 2) at 45% 75%, var(--c2), transparent 30% 60%, var(--c2)),
            conic-gradient(from calc(var(--angle) * -3) at 80% 20%, var(--c1), transparent 40% 60%, var(--c1)),
            conic-gradient(from calc(var(--angle) * 2) at 15% 5%, var(--c2), transparent 10% 90%, var(--c2)),
            conic-gradient(from calc(var(--angle) * 1) at 20% 80%, var(--c1), transparent 10% 90%, var(--c1)),
            conic-gradient(from calc(var(--angle) * -2) at 85% 10%, var(--c3), transparent 20% 80%, var(--c3));
          box-shadow: inset var(--bg) 0 0 5vmin 1vmin;
          filter: blur(3vmin) contrast(5);
          animation: rotate 20s linear infinite;
        }

        .orb::after {
          --dot: 1.5px;
          background-image: radial-gradient(circle at center, var(--bg) var(--dot), transparent var(--dot));
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          mask-image: radial-gradient(black 25%, transparent 75%);
          backdrop-filter: blur(8vmin) contrast(10);
          mix-blend-mode: overlay;
        }

        @keyframes rotate {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </div>
  );
};

export default Orb;
