import { UserResponse } from "interfaces/user/userResponse";
import { isEmpty } from "lodash";
import { Navigate } from "react-router-dom";
interface Props {
  children: JSX.Element;
  isAllowed: boolean;
  token: string;
}

const ProtectedRoute = ({ children, isAllowed, token }: Props) => {
  if (!token || isEmpty(token)) {
    return <Navigate to="/" />;
  }
  if (isAllowed) {
    return children;
  }

  return <Navigate to="/404" />;
};

export default ProtectedRoute;
