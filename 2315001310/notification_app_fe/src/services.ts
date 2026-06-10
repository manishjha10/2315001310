export const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export const getNotifications = async (
  token: string,
  page: number = 1,
  limit: number = 10,
  type: string = ""
) => {
  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;

  if (type && type !== "All") {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
};
