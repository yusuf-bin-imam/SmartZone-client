import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setisAdmin] = useState(false);
  const [isAdminLoading, setisAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_URL}/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setisAdmin(data.isAdmin);
          setisAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
