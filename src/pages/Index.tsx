
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This file is just a redirect to the Home page
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;
