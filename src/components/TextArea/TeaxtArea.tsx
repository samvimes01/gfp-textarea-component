import { nanoid } from "nanoid";
import { useState } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (v: string) => any;
};

function TextArea({
  label,
  placeholder,
  error,
  value,
  disabled,
  onChange,
}: Props) {
  const [val, setVal] = useState(value);
  const id = nanoid();
  const onValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!e?.target?.value) return;
    setVal(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const borderColor = disabled ? "border-neutral-100" : "border-neutral-200";
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
        className={`input h-10 px-3 py-2.5 gap-2 border rounded ${borderColor} bg-zinc-50 flex items-center w-px-340 ${
          error ? "input-err" : ""
        }`}
      >
        <textarea
          id={id}
          placeholder={placeholder}
          className={`appearance-none focus:outline-none w-full min-w-[260px] bg-zinc-50 text-sm ${textColor} font-normal placeholder:text-sm ${placeholderColor} placeholder:font-normal ${clickable}`}
          value={val}
          onChange={(e) => onValue(e)}
        />
      </div>
      {error && <p className="text-sm text-red-600 font-normal">{error}</p>}
    </div>
  );
}

export default TextArea;
