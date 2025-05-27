import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  href = "/",
  color = "black",
  text = "",
}) {
  const logoSvg = (
    <section className="flex items-center gap-3 px-2 transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-full ring-2 ring-primary/20 transition-all duration-300 hover:ring-4">
        <Image
          priority
          src="https://github.com/cezarcozta.png?size=200"
          alt="avatar"
          width={45}
          height={45}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <svg
        viewBox="0 0 220 45"
        className={`hidden w-auto h-8 sm:block ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
            .logo-text { 
              font-family: 'Poppins', sans-serif; 
              font-weight: 600;
              letter-spacing: 0.05em;
            }
          `}
          </style>
        </defs>
        <text 
          x="10" 
          y="30" 
          className="logo-text" 
          fontSize="26" 
          fill={color}
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {text}
        </text>
      </svg>
    </section>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoSvg}
      </Link>
    );
  }

  return logoSvg;
}
