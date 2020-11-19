import React from "react";
import ChatItem from "./ChatItem";

function ChatMapper({ fakeUser }) {
  const mappedChat = fakeUser.chats.map((chat) => (
    <ChatItem user={chat.text} key={chat.chatId} />
  ));
  return <>{mappedChat}</>;
}

export default ChatMapper;
