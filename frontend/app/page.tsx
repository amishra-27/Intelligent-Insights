"use client";
import { useState, useEffect } from "react";
import ChatContainer from "../Components/ChatContainer";
import ChatHeader from "../Components/ChatHeader";
import MessageList from "../Components/MessageList";
import InputArea from "../Components/InputArea";
import InitialMessage from "../Components/InitialMessage";

type MessageType = {
  id: string;
  html: string;
  sender: "user" | "bot" | "loading";
};

export default function HomePage() {
  const [apiKey, setApiKey] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [processing, setProcessing] = useState(false);

  // on load, pull key
  useEffect(() => {
    const saved = localStorage.getItem("openai_api_key");
    if (saved) setApiKey(saved);
  }, []);

  const handleSetKey = (key: string) => {
    if (!key.startsWith("sk-")) return alert("Invalid API key");
    localStorage.setItem("openai_api_key", key);
    setApiKey(key);
  };

  const sendMessage = async (text: string) => {
    if (processing) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), html: text, sender: "user" }]);
    const loadingId = Date.now().toString();
    setMessages(prev => [...prev, { id: loadingId, html: "Thinking and generating response...", sender: "loading" }]);
    setProcessing(true);
    // …call OpenAI, replace loading …
    setProcessing(false);
  };

  return (
    <ChatContainer>
      <ChatHeader />
      <MessageList messages={apiKey ? messages : [
        { id: "init", html: "", sender: "bot" } // placeholder
      ]} />
      { !apiKey
        ? <InitialMessage onSetKey={handleSetKey} />
        : <InputArea onSend={sendMessage} disabled={processing} />
      }
    </ChatContainer>
  );
}
