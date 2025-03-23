import { useEffect, useState } from 'react';

const TypingEffect = () => {
    const phrases = [
        'Keluarga Besar KSP. Usaha Bersama Mandiri Indonesia Mengucapkan',
        'Selamat Hari Raya Idul Fitri 1446 Hijriyah',
        'Minal Aidzin Walfaidzin<br/>Mohon Maaf Lahir & Batin', // Contoh dengan <br/>
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        let timeout;
        if (isDeleting) {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentPhrase.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, 25);
            } else {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        } else {
            if (charIndex < currentPhrase.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentPhrase.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, 50);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 1000);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentPhraseIndex, phrases]);

    // Pisahkan string dengan "<br/>" lalu render tiap baris
    const formattedText = displayText.split('<br/>').map((line, index, arr) => (
        <span key={index}>
            {line}
            {index < arr.length - 1 && <br />}
        </span>
    ));

    return (
        <div className="font-montserrat mx-auto mt-2 min-h-16 max-w-[80%] text-wrap text-center text-xl font-medium text-amber-500">
            <span className="inline-block align-middle">
                {formattedText}
                <span className="animate-blink inline-block align-middle">
                    |
                </span>
            </span>
        </div>
    );
};

export default TypingEffect;
