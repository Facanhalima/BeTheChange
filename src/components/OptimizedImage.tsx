import React from 'react';
import useImageLoader from '../hooks/useImageLoader';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  placeholder,
  className = '',
  ...props
}) => {
  const { imageSrc, isLoading, error } = useImageLoader({
    src,
    placeholder,
  });

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'lazy' : 'lazy loaded'}`}
      loading="lazy"
      {...props}
    />
  );
};

export default OptimizedImage; 