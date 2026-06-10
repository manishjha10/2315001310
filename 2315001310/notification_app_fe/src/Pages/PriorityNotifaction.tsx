import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState<any[]>([]);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications(token);

      const priority = data.notifications.filter(
        (item: any) =>
          item.Type === "Placement" ||
          item.Type === "Result"
      );

      setNotifications(priority);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Priority Notifications</h2>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          id={notification.ID}
          type={notification.Type}
          message={notification.Message}
          timestamp={notification.Timestamp}
          read={false}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;
