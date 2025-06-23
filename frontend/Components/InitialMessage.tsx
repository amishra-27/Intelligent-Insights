"use client";
import { Dispatch, SetStateAction } from "react";

export default function InitialMessage({
  onSetKey,
}: {
  onSetKey: (key: string) => void;
}) {
  return (
    <div className="api-setup" id="apiSetup">
      <strong>Setup Required:</strong> Please enter your OpenAI API key to get started
      <br />
      <input
        type="password"
        className="api-input"
        placeholder="Enter your OpenAI API key (sk-...)"
        onKeyDown={e => e.key === "Enter" && onSetKey((e.target as HTMLInputElement).value)}
      />
      <br />
      <button className="api-button" onClick={() => {
        const input = document.querySelector<HTMLInputElement>(".api-input")!;
        onSetKey(input.value);
      }}>
        Save API Key
      </button>
      <br />
      <small>Your API key is stored locally and never shared</small>
    </div>
  );
}
