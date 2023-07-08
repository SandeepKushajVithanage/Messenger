import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import React from "react";

type Props = {
  params: {
    conversationId: string;
  };
};

const page = async ({ params }: Props) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col"></div>
      </div>
    );
  }

  return <div>Conversation Id</div>;
};

export default page;
