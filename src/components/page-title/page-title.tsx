"use client";

interface IPageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle({ title, subtitle }: IPageTitleProps) {
  return (
    <header className="relative bg-secondary/95 text-primary py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,var(--secondary-light)_100%)] opacity-50 animate-gradient"
        style={{ 
          backgroundSize: '200% 200%',
        }}
      />
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
