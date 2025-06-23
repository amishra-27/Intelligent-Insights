"use client";

type MessageType = {
    id: string;
    html: string;
    sender: "user" | "bot" | "loading";
};

import { useEffect, useRef } from "react";
import Message from "./Message";

export default function MessageList({ messages }: { messages: MessageType[] }) {
    const endRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
    <div className="chat-messages" id="chatMessages">
      {messages.map(msg => (
        <Message key={msg.id} {...msg} />
      ))}
      <div ref={endRef} />
    </div>
  );
}