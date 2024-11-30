import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

    async function fetchWithAuth(url) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate. Please try logging in again.");
  }

  return response.json();
}

  useEffect(() => {
    async function fetchProtectedData() {
      try {
        const data = await fetchWithAuth("http://localhost:5000/protected");
        setMessage(data.message); 
      } catch (err) {
        setError(err.message); 
      }
    }

    fetchProtectedData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return <h1>{message || "Loading..."}</h1>; 
}
