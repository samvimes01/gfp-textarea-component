import { nanoid } from "nanoid";
import { useState } from "react";
import "./TextArea.css";

type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  limit?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (v: string) => any;
};

function TextArea({
  label,
  placeholder = "",
  error,
  value = "",
  limit = 500,
  disabled,
  onChange,
}: Props) {
  const [val, setVal] = useState(value);
  const [counter, setCounter] = useState(value.length);
  const [exided, setExided] = useState(value.length > limit);
  const id = nanoid();
  const onValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e?.target?.value;
    if (value == null) return;
    setVal(value);
    setCounter(value.length);
    setExided(value.length > limit);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const borderColor = error
    ? "border-red-300"
    : disabled
    ? "border-neutral-100"
    : "border-neutral-200";
  const textColor = disabled ? "text-neutral-400" : "text-neutral-900";
  const placeholderColor = disabled
    ? "placeholder:text-neutral-400"
    : "placeholder:text-neutral-500";
  const clickable = disabled ? "pointer-events-none	" : "";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm text-neutral-700 font-medium">
          {label}
        </label>
      )}
      <div
        className={`textarea border rounded-lg ${borderColor} bg-zinc-50 w-px-340 min-h-[108px] ${
          error || exided ? "error" : ""
        }`}
      >
        <textarea
          id={id}
          placeholder={placeholder}
          className={`appearance-none resize-none focus:outline-none w-full min-h-full min-w-[260px] bg-zinc-50 text-sm ${textColor} font-normal placeholder:text-sm ${placeholderColor} placeholder:font-normal ${clickable}`}
          value={val}
          onChange={(e) => onValue(e)}
        />
      </div>
      {error && <p className="text-sm text-red-600 font-normal">{error}</p>}
      {!error && (
        <span
          className={`text-sm ${
            exided ? "text-red-600" : "text-neutral-500"
          } font-normal text-right`}
        >
          {counter}/{limit}
        </span>
      )}
    </div>
  );
}

export default TextArea;
