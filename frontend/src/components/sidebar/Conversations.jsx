import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

function Conversations() {
  const { conversations, loading } = useGetConversations();
  console.log("Conversations: ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation,idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
			lastIdx={idx ===conversations.length - 1}
          />
        );
      })}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
