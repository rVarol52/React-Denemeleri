import React from "react";
import { useState } from "react";

function PersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Ad</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Soyad</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
