import { InputHTMLAttributes } from "react";

export function Switch(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" {...props} />;
}
