import { useState, useEffect } from 'react';

interface UseImageLoaderProps {
  src: string;
  placeholder?: string;
}

const useImageLoader = ({ src, placeholder = 'https://via.placeholder.com/300x200' }: UseImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setError('Erro ao carregar a imagem');
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { imageSrc, isLoading, error };
};

export default useImageLoader; 