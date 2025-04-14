import React from "react";
import UserList from "./UserList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "linear-gradient(120deg, #f6d 0%, #fff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Список пользователей
      </h2>
      <UserList />
    </div>
  );
}

export default App;
