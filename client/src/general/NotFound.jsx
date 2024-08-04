/**
 * A functional component that renders a "Page not found" message and a button to navigate back to the home page.
 *
 * @returns {JSX.Element} - A JSX element representing the "Page not found" component.
 */

import { RoutePaths } from "./RoutePaths.jsx";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg font-medium">Page not found.</h3>
      <button onClick={() => navigate(RoutePaths.HOME)} type="button">
        Go Home
      </button>
    </div>
  )
};
