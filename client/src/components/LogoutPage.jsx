import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (response.ok) {
        // Clear token from client-side storage
        localStorage.removeItem("jwtToken");
        // Redirect to login page
        history("/login");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleLogoutClick = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      handleLogout();
    }
  };

  return (
    <div className="logout-page">
      <h1>Logging out...</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default LogoutPage;
