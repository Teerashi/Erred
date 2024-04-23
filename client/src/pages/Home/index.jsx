import { useState } from "react";
import Header from "../../components/Header";


function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  const x = 1;
  return (
    <>
     <Header/>
    </>
  );
}

export default HomePage;