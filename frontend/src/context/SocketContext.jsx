import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";

import { useAuthContext } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-application-t5dy.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
