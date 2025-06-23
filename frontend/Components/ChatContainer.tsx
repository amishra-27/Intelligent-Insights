"use client";
import { ReactNode } from "react";
export default function ChatContainer({ children }: { children: ReactNode}){
    return (
        <div className="chat-container">
            {children}
        </div>
    );
}