import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("❌ Error fetching messages:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Delete single message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("❌ Error deleting message:", err);
    }
  };

  // Delete all messages
  const deleteAllMessages = async () => {
    if (!window.confirm("⚠️ This will delete ALL messages. Continue?")) return;
    try {
      await axios.delete("http://localhost:5000/api/contact");
      setMessages([]);
    } catch (err) {
      console.error("❌ Error deleting all messages:", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-xl font-bold dark:text-gray-200 flex items-center gap-2">
          📩 Contact Messages
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({messages.length})
          </span>
        </h2>
        {messages.length > 0 && (
          <button
            onClick={deleteAllMessages}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2 text-left dark:text-gray-200">
                Name
              </th>
              <th className="border px-4 py-2 text-left dark:text-gray-200">
                Email
              </th>
              <th className="border px-4 py-2 text-left dark:text-gray-200">
                Message
              </th>
              <th className="border px-4 py-2 text-left dark:text-gray-200">
                Sent At
              </th>
              <th className="border px-4 py-2 text-center dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr
                  key={msg._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="border px-4 py-2 dark:text-gray-200">
                    {msg.name}
                  </td>
                  <td className="border px-4 py-2 dark:text-gray-200">
                    {msg.email}
                  </td>
                  <td className="border px-4 py-2 dark:text-gray-200">
                    {msg.message}
                  </td>
                  <td className="border px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-500 italic dark:text-gray-400"
                >
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardMessages;
