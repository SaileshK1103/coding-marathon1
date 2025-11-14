import React, { useState } from "react";
import "./ContactListManager.css";

/**
 * ContactListManager is a React component that allows users to add, view, and delete contacts.
 */
function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [email, setEmail] = useState("");
  // States for each contact input field
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [birthday, setBirthday] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [favourate, setFavourate] = useState(false);

  // Event handlers for controlled inputs
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }
  function handleBirthdayChange(event) {
    setBirthday(event.target.value);
  }
  function handleNoteChange(event) {
    setNotes(event.target.value);
  }
  function handleWebsiteChange(event) {
    setWebsite(event.target.value);
  }
  function handleFavourateChange(event) {
    setFavourate(event.target.checked);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  /**
   * Adds a new contact to the list if all required fields are filled.
   * Resets input fields after successful addition.
   * Shows an alert if required fields are missing.
   */
  function addContact() {
    if (
      /**
       * Favourate field is optional
       * website field is optional
       */
      name.trim() !== "" &&
      jobTitle.trim() !== "" &&
      birthday.trim() !== "" &&
      notes.trim() !== "" &&
      email.trim() !== ""
    ) {
      setContacts((c) => [
        ...c,
        { name, jobTitle, birthday, notes, website, favourate, email },
      ]);
      setName("");
      setJobTitle("");
      setBirthday("");
      setNotes("");
      setEmail("");
      setWebsite("");
      setFavourate(false);
    } else {
      alert("Please fill in all fields to add contact.");
    }
  }

  /**
   * Deletes a contact from the list given its index.
   * @param {number} index - Index of the contact to delete
   */
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          addContact();
        }}
      >
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-row">
          <label>Job Title:</label>
          <input
            type="text"
            placeholder="Enter job title..."
            value={jobTitle}
            onChange={handleJobTitleChange}
          />
        </div>
        <div className="form-row">
          <label>Birthday:</label>
          <input type="date" value={birthday} onChange={handleBirthdayChange} />
        </div>
        <div className="form-row">
          <label>Notes:</label>
          <input
            type="text"
            placeholder="Enter notes..."
            value={notes}
            onChange={handleNoteChange}
          />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-row">
          <label>Website:</label>
          <input
            type="url"
            placeholder="Enter website URL..."
            value={website}
            onChange={handleWebsiteChange}
          />
        </div>
        <div className="form-row">
          <label>
            <input
              type="checkbox"
              checked={favourate}
              onChange={handleFavourateChange}
            />
            Favourite
          </label>
        </div>

        <button className="add-btn" type="submit">
          Add Contact
        </button>
      </form>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>
              <strong>{contact.name}</strong>
              {contact.favourate && <span> ★ </span>}
            </div>
            <div>Job Title: {contact.jobTitle}</div>
            <div>Birthday: {contact.birthday}</div>
            <div>Notes: {contact.notes}</div>
            <div>
              Website:{" "}
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.website}
              </a>
            </div>
            <div>Email: {contact.email}</div>
            <div>
              {"Click here to delete Contact ->  "}
              <button
                className="delete-btn"
                onClick={() => deleteContact(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;
