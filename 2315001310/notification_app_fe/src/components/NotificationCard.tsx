type Props = {
  id: string;
  type: string;
  message: string;
  timestamp: string;
  read: boolean;
  onClick: () => void;
};

function NotificationCard({
  type,
  message,
  timestamp,
  read,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "8px",
        background: read ? "#f5f5f5" : "#ffffff",
        cursor: "pointer",
      }}
    >
      <h3>{type}</h3>
      <p>{message}</p>
      <small>{timestamp}</small>
    </div>
  );
}

export default NotificationCard;
