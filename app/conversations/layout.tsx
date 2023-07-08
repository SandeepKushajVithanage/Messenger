import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const conversations = await getConversations();
  return (
    // @ts-expect-error Server Componet
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} /> {children}
      </div>
    </Sidebar>
  );
};

export default layout;
