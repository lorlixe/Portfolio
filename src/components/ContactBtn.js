import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      navigate("/contact");
    }
  }, [isOpen, navigate]);

  function click() {
    setIsOpen(isOpen ? false : true);
  }
  return (
    <div>
      <button className="btn-contact" onClick={click}>
        <span>👤</span> Contact
      </button>
    </div>
  );
};

export default ContactBtn;
