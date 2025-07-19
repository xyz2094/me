import { useState } from "react";

import "../styles/components/footer.sass";

function Footer() {
  const [count, setCount] = useState(0)
  return (
    <> 
      <div className="main-footer">
        <p> vittor dallacqua &copy; {new Date().getFullYear()} </p>
      </div>
      <div
      <br> </br>
className="easter-egg">
        <p>you clicked {count} times xD</p>
        <button onClick={() => setCount(count + 1)}>easter egg</button>
      </div>
    </>
  );
}

export default Footer;
