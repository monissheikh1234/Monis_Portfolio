import React from 'react';

interface SafeIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  fallback?: React.ReactNode;
}

export function SafeIcon({ icon: Icon, className, fallback }: SafeIconProps) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return fallback || <div className={`w-6 h-6 bg-primary/20 rounded ${className}`} />;
  }

  return (
    <div onError={() => setHasError(true)}>
      <Icon className={className} />
    </div>
  );
} 