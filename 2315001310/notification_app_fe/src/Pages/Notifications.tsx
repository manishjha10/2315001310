import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";

type Notification = {
  ID: string;
  Type: string;
  Message: string;
  Timestamp: string;
};

function AllNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("All");

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications(token, page, 10, type);
      setNotifications(data.notifications || []);
    } catch (error) {
      console.error(error);
    }
  };

  const markAsRead = (id: string) => {
    const read = JSON.parse(
      localStorage.getItem("readNotifications") || "[]"
    );

    if (!read.includes(id)) {
      read.push(id);
      localStorage.setItem(
        "readNotifications",
        JSON.stringify(read)
      );
    }
  };

  return (
    <div>
      <h2>All Notifications</h2>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>All</option>
        <option>Event</option>
        <option>Result</option>
        <option>Placement</option>
      </select>

      {notifications.map((notification) => {
        const read = JSON.parse(
          localStorage.getItem("readNotifications") || "[]"
        );

        return (
          <NotificationCard
            key={notification.ID}
            id={notification.ID}
            type={notification.Type}
            message={notification.Message}
            timestamp={notification.Timestamp}
            read={read.includes(notification.ID)}
            onClick={() => markAsRead(notification.ID)}
          />
        );
      })}

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default AllNotifications;
