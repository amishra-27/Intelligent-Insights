"use client"
import React from "react";

export default function Message({
    id,
    html,
    sender
}: {
    id: string;
    html: string;
    sender: "user" | "bot" | "loading";
}) {
    let classes = "message";
    if (sender === "user") classes += "user-message";
    else if (sender === "bot") classes += "bot-message";
    else classes += "loading";

    return (
        <div id={id} className={classes} dangerouslySetInnerHTML={{ __html: html }} />
    );
}