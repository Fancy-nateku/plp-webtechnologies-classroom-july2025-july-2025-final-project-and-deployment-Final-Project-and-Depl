import React, {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { KANJI_CAPTCHA_SET } from "../constants";
import { Kanji } from "../types";

interface KanjiCaptchaProps {
  onVerified: (isVerified: boolean) => void;
}

export interface KanjiCaptchaRef {
  reset: () => void;
}

const generateChallenge = (): Kanji[] => {
  const shuffled = [...KANJI_CAPTCHA_SET].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const KanjiCaptcha = forwardRef<KanjiCaptchaRef, KanjiCaptchaProps>(
  ({ onVerified }, ref) => {
    const [challenge, setChallenge] = useState<Kanji[]>([]);
    const [userInput, setUserInput] = useState("");
    const [status, setStatus] = useState<"pending" | "success" | "error">(
      "pending"
    );

    const resetChallenge = useCallback(() => {
      setChallenge(generateChallenge());
      setUserInput("");
      setStatus("pending");
      onVerified(false);
    }, [onVerified]);

    useImperativeHandle(ref, () => ({
      reset: resetChallenge,
    }));

    useEffect(() => {
      resetChallenge();
    }, [resetChallenge]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase();
      setUserInput(value);
      const expectedAnswer = challenge.map((k) => k.romaji).join("");
      if (value === expectedAnswer) {
        setStatus("success");
        onVerified(true);
      } else {
        setStatus("pending");
        onVerified(false);
      }
    };

    const borderColor =
      status === "success"
        ? "border-[var(--terminal-green)]"
        : status === "error"
        ? "border-red-500"
        : "border-[var(--border-color)]";

    return (
      <div className="space-y-2">
        <label className="block text-sm font-mono tracking-wider">
          SECURITY CHECK // TYPE ROMAJI
        </label>
        <div className="flex items-center gap-4 p-3 bg-[var(--bg-color)] border border-[var(--border-color)]">
          <div className="flex-1 flex justify-center items-center gap-4 text-3xl text-[var(--accent-color)] font-bold">
            {challenge.map((k) => (
              <span key={k.char}>{k.char}</span>
            ))}
          </div>
          <button
            type="button"
            onClick={resetChallenge}
            aria-label="Refresh captcha"
            className="p-1 text-[var(--text-color)]/50 hover:text-[var(--accent-color)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="e.g. dennou"
          disabled={status === "success"}
          className={`w-full bg-transparent p-3 font-mono border-2 ${borderColor} focus:border-[var(--accent-color)] focus:outline-none transition-colors`}
          autoComplete="off"
          spellCheck="false"
        />
        {status === "success" && (
          <p className="text-sm text-[var(--terminal-green)] font-mono">
            Verified.
          </p>
        )}
      </div>
    );
  }
);

export default KanjiCaptcha;
