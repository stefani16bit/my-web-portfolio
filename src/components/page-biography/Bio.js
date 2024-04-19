import "./Bio.css";

function Bio() {
  return (
    <div className="bio-description-container">
      <h2 className="bio-title">Hello {"{"}</h2>

      <div className="bio-description-box-container">
        <p className="bio-description-box">My name is Stefani and I'm a Fullstack Developer {"(Backend focus)"}, who is passionate about technology and computers!
        <p>I'm currently graduating in Computer Science, while my interests are diverse, they all revolve around understanding and 
        solving human problems!</p></p>
      </div>

      <h2 className="bio-title-2">My main skills {"{"}</h2>

      <div className="bio-description-box-container-2">

        <div className="dev-icons-container">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" title="Python"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" title="Java"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="JavaScript"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" title="Node"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" title="GraphQL"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" title="MySQL"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" title="Selenium"/>
        </div>
      </div>
    </div>
  );
}

export default Bio;
