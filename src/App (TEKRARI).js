//!burada sadece importlar

import React, { useState } from "react";
import { useEffect } from "react";

//!burada sadece state effect fonksiyonlar
const App = () => {
  const [items, setİtems] = useState([]);
  const [visible, setVisible] = useState(3);

  const handleVisible = () => {
    setVisible(item => item+3)

  };

  useEffect(() => {
    fetch("linkden gelecek data")
      .then((res) => res.json())
      .then((data) => setİtems(data.BUYUKARRAY));
    console.log("GÖRÜNTÜLEME OPSİYONU");
  }, []);

  //!burada da görüntülemeyle alakalı şeyler
  return (
    <div>
      {items.slice(0, visible).map((item) => (
        <>
          <div className="containeer card ">
            <img src={item.image} alt="as" />
            <div> {item.başlık}</div>
          </div>
          <button onClick={handleVisible}></button>
        </>
      ))}
    </div>
  );
};

export default App;
