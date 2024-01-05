// EditForm.js

import React, { useState } from 'react';

function EditForm({ id, text, onSave }) {
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    onSave(id, editedText);
  };

  return (
    <div className="update">
      <div className="editInput">
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="addInput"
          type="text"
        />
      </div>
      <div className="buttons">
        <a>
          <button onClick={handleSave}>Save</button>
        </a>
      </div>
    </div>
  );
}

export default EditForm;
