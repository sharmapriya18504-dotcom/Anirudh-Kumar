import React, { useState, useEffect } from 'react';

export default function Typewriter({ words = ["BEST SEO EXPERT", "DIGITAL MARKETER"] }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let delay = isDeleting ? 80 : 150;

    if (!isDeleting && text === currentWord) {
      delay = 2000; // Pause at end of word
    } else if (isDeleting && text === '') {
      delay = 500; // Pause before typing next word
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentWord) {
          setIsDeleting(true);
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      } else {
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setText(currentWord.substring(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return <span className="line2" id="changing-word">{text}</span>;
}

