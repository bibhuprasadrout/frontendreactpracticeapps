import { NavLink } from "react-router";
import { Outlet } from "react-router";
const CommonLandingPage = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/hooks'>Hooks</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default CommonLandingPage;
