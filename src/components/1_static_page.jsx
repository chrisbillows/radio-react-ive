import React from 'react';

export function StaticPage() {
  return (
    <div>
      <header>
        <h1>Chris's React App</h1>
      </header>

      <main>
        <h2>A welcome page to which you are distinctly unwelcome.</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          alt="React logo"
          width="200px"
          className="spinning"
        />
        <p>This is some very interesting content.</p>
        <p>NO! This is some very interesting content.</p>
        <img 
        src="https://media.licdn.com/dms/image/C4E03AQFjjQooklidDg/profile-displayphoto-shrink_800_800/0/1517664760474?e=2147483647&v=beta&t=NsHqPriIaExqn99f9uDCJtKBlRJZqEa5MBwB7QczkJQ"
        alt="A handsome man's head spins."
        width="100px"
        className="spinning"
        />
      </main>

      <footer>
        <p>What afoot-er.</p>
      </footer>
    </div>
  );
}