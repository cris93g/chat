module.exports = function({ name }) {
  const users = new Map();
  let chatHistory = [];

  function broadcastMessge(message) {
    users.forEach(u => {
      u.emit("message", message);
    });
  }

  function addEntry(entry) {
    chatHistory = chatHistory.concat(entry);
  }

  function getChatHistory() {
    return chatHistory.slice();
  }

  function addUserToRoom(user) {
    users.set(user.id, user);
  }

  function removeUserFromRoom(user) {
    users.delete(user.id);
  }

  function serialize() {
    return {
      name,
      numOfUsers: users.size
    };
  }

  return {
    broadcastMessge,
    addEntry,
    getChatHistory,
    addUserToRoom,
    removeUserFromRoom,
    serialize
  };
};
