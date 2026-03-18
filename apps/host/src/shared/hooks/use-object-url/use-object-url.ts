import { useEffect, useState } from 'react';

interface UseObjectUrlReturn {
  url: string;
  setFile: (file: File) => void;
  clear: () => void;
}

const useObjectUrl = (): UseObjectUrlReturn => {
  const [url, setUrl] = useState('');

  const clear = () => {
    setUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return '';
    });
  };

  const setFile = (file: File) => {
    const nextUrl = URL.createObjectURL(file);

    setUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return nextUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  return { url, setFile, clear };
};

export default useObjectUrl;
