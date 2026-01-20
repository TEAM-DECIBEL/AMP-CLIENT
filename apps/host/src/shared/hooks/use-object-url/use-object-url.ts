import { useEffect, useState } from 'react';

interface UseObjectUrlReturn {
  url: string;
  setFile: (file: File) => void;
}

const useObjectUrl = (): UseObjectUrlReturn => {
  const [url, setUrl] = useState('');

  const setFile = (file: File) => {
    setUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  return { url, setFile };
};

export default useObjectUrl;
