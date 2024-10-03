"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { errorMsg } from "../../component/Toastmsg/toaster";
import userDetail from "@/services/UserDetail";
import { Container } from "@mui/material";

const Welcome = () => {
  const [userData, setUserData] = useState();
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchUser = async () => {
      if (session) {
        try {
          const dataUser = await userDetail.getAllUser();
          setUserData(dataUser);
        } catch (error) {
          errorMsg(error?.message);
        }
      }
    };

    fetchUser();
  }, [session]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Container className="max-w-full">
        <div >
        <div className="p-4">
          <div className="text-lg mb-4">User List:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userData?.length > 0 ? (
              userData?.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 p-4 rounded-lg shadow-md"
                >
                  <p>{item.full_name}</p>
                </div>
              ))
            ) : (
              <p>No user data available.</p>
            )}
          </div>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Welcome;

/**/
