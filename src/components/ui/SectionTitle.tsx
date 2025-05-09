import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}