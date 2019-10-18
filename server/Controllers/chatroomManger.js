const Chatrooms = require("./chatrooms");
const chatroomTemplate = require("../../config/chatrooms");
module.exports = function() {
  const chatrooms = new Map(chatroomTemplate.map(c => [c.name, Chatrooms(c)]));

  function removeUser(user) {
    chatrooms.forEach(u => u.removeUserFromRoom(user));
  }

  function getChatRoomByName(chatroomName) {
    return chatrooms.get(chatroomName);
  }

  function serializeChatRooms() {
    return Array.from(chatrooms.values()).map(c => c.serialize());
  }

  return {
    removeUser,
    getChatRoomByName,
    serializeChatRooms
  };
};
