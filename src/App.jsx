import { useState } from "react"

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state

  const [emails, setEmails] = useState(initialEmails)

  function toggleRead(email) {
    let item = [...emails]
    email.read = !email.read
    setEmails(item)
  }

  function toggleStar(email) {
    let item = [...emails]
    email.starred = !email.starred
    setEmails(item)
  }


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map(function (email) {
          return (
            <li key={email.id} className={`email ${email.read ? 'read' : ''}`}>
              <input
                type="checkbox"
                checked={email.read}
                onClick={() => toggleRead(email)}
                name=""
                id=""
                className="read"
              />
              <input
                type="checkbox"
                checked={email.starred}
                onClick={() => toggleStar(email)}
                name=""
                className="star-checkbox "
              />
              <span className="sender">{email.sender}</span>
              <span className="title">{email.title}</span>
            </li>
          );
        })}
      </main>
    </div>
  )
}

export default App
