import { useState, useEffect } from "react";
import Navbaruser from '../../components/Navbaruser';
import SearchBar from '../../components/Searchbar';

// client/src/components/Navbaruser.jsx
export const Home = () => {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  // return <div className="mt-10 flex w-full flex-col">{message}</div>;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbaruser/>
      <div className="flex-grow flex items-center justify-center">
        <SearchBar />
      </div>
    </div>
  )
};
