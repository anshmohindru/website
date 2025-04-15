function Contact() {
    return (
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Contact Me</h1>
        <p>You can reach me anytime at:</p>
  
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            📧 <strong>Email:</strong>{' '}
            <a href="mailto:anshmohindru@gmail.com">Here</a>
          </li>
          <li>
            🧳 <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/ansh-mohindru-a987932ab/"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </li>
          <li>
            💻 <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/anshmohindru"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </li>
          <li>
            🗨️ <strong>Discord:</strong>{' '}
            <a
              href="https://discordapp.com/users/624025359121121280"
              target="_blank"
              rel="noreferrer"
            >
             Here
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Contact;
  