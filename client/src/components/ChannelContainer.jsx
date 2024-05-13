import React from "react";
import {
  Channel,
  useChatContext,
  MessageText,
  MessageList,
  useChannelStateContext,
  MessageInput,
  useMessageContext,
} from "stream-chat-react";

import { EmojiPicker } from "stream-chat-react/emojis";

import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  const { messages } = useChannelStateContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">Это исто рия начала вашего чата</p>
      <p className="channel-empty__second">
        Вы можете отправлять сообщения, стикеры, ссылки и другое
      </p>
    </div>
  );

  return (
    <div className="channel__container">
      <Channel EmojiPicker={EmojiPicker}>
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
