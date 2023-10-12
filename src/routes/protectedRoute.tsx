import { Navigate } from 'react-router-dom';
 interface Props {
    children: JSX.Element;
    isAllowed: boolean;
    user: {id: string; username: string; role: {id: string; name: string } };
}

const ProtectedRoute = ({children, isAllowed, user}: Props) => {
  if(!user) {
    return <Navigate to="/"/>;
  }
  if(isAllowed) {
    return children;
  }

  return <Navigate to="/404"/>
}

export default ProtectedRoute