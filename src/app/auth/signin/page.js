"use client";
import { FormControl } from "@mui/joy";
import { FormLabel } from "@mui/joy";
import { Sheet } from "@mui/joy";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routesUrl } from "@/utils/pagesurl";
import InputField from "../../../component/shared/form/InputField";
import { errorMsg, successMsg } from "../../../component/Toastmsg/toaster";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginvalidation } from "@/component/Validation/loginvalidation";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        return errorMsg("Invalid credentials");
      } else {
        router.replace(routesUrl.products);
        return successMsg("Login Successfully");
      }
    } catch (error) {
      return errorMsg("Login Error");
    }
  };

  return (
    <>
      <Sheet
        sx={{
          width: 500,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Typography variant="h4">
              <b>Welcome!</b>
            </Typography>
            <Typography variant="body2">Sign in Detail : </Typography>
            <Typography variant="body2">
              Email : correct_login@example.com
            </Typography>
            <Typography variant="body2">Password : C0rr3Ct_P@55w0rd</Typography>
          </div>

          <div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputField
                control={control}
                name="email"
                type="email"
                placeholder="example123@gmail.com"
              />
              <Typography variant="body2" color="error" gutterBottom>
                {errors?.email?.message}
              </Typography>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputField control={control} name="password" type="password" />
              <Typography variant="body2" color="error" gutterBottom>
                {errors?.password?.message}
              </Typography>
            </FormControl>
          </div>
          <br />
          <div>
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold cursor-pointer px-6 py-2 rounded-md transition duration-300"
            >
              Login
            </Button>
          </div>
          <div className="mt-5 ml-1">
            {error}
            <Typography variant="body2" sx={{ alignSelf: "center" }}>
              {`Don't have an account?`}
              <Link href="/sign-up" className="mr-2">
                Sign up
              </Link>
            </Typography>
          </div>
        </form>
      </Sheet>
    </>
  );
};

export default Login;
