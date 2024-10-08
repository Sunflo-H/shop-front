import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveAndCancelBtn from "../../components/management/main/ui/SaveAndCancelBtn";
import InputFormTitle from "../../components/management/main/ui/InputFormTitle";
import { resetNewUser, setNewUser } from "../../slice/userRegisterSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../api/userApi";
import { alert_productUploadSuccess } from "../../alerts/success";

const requireOptions = [
  "emailLocal",
  "emailDomain",
  "password",
  "name",
  "phone",
  "role",
];
const roleOptions = ["User", "Admin"];
const options = [
  "- Select -",
  "gmail.com",
  "naver.com",
  "daum.net",
  "hotmail.com",
  "yahoo.co.kr",
  "ymail.com",
  "outlook.com",
  "nate.com",
  "icloud.com",
  "me.com",
  "mac.com",
].sort();

export default function UserRegister() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { newUser } = useSelector((state) => state.userRegister);
  const { emailLocal, emailDomain, password, name, phone, role } = newUser;

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: async (data) => {
      await alert_productUploadSuccess();
      dispatch(resetNewUser());
      queryClient.invalidateQueries("users");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setNewUser({ ...newUser, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-lightblue manage-font">
      <div className="max-w-screen-lg w-screen m-auto pt-6">
        <section className="flex justify-center gap-6 mb-12">
          <div className="w-1/2">
            <section className="bg-white rounded-md shadow-md px-2 py-4">
              {/* email */}
              <div className=" py-4 px-4">
                <InputFormTitle title="E-Mail" required={true} />
                <div className="flex text-start mt-1">
                  <input
                    type="text"
                    name="emailLocal"
                    className="w-full outline-none border rounded-md px-2 py-2 focus:border-gray-400 "
                    placeholder="Enter your local"
                    value={emailLocal}
                    onChange={handleInputChange}
                  />
                  <span className="flex items-center mx-1">@</span>
                  <input
                    type="text"
                    name="emailDomain"
                    placeholder="Enter your domain"
                    className="w-full outline-none border rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
                    value={emailDomain}
                    onChange={handleInputChange}
                  />
                  <select
                    className={`w-28 px-2 py-2 text-gray-700 bg-white border rounded-md cursor-pointer focus:outline-none focus:border-gray-400`}
                    value={options[0]}
                    name="emailDomain"
                    onChange={handleInputChange}
                  >
                    {options.map((option, i) => (
                      <option value={option} key={i}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* password */}
              <div className=" py-4 px-4">
                <InputFormTitle title="Password" required={true} />
                <div className="grow text-start mt-1">
                  <input
                    type="text"
                    name="password"
                    className="w-full outline-none border  rounded-md px-2 py-2 mr-2 focus:border-gray-400 "
                    placeholder="ex) password1234!@"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* name */}
              <div className=" py-4 px-4">
                <InputFormTitle title="Name" required={true} />
                <div className="flex  mt-1 ">
                  <input
                    type="text"
                    name="name"
                    className="w-full outline-none border  rounded-md px-2 py-2 focus:border-gray-400 "
                    placeholder="ex) hong gil dong"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* phone */}
              <div className=" py-4 px-4">
                <InputFormTitle title="Phone Number" required={true} />
                <div className="flex  mt-1 ">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full outline-none border  rounded-md px-2 py-2 focus:border-gray-400 "
                    placeholder="010-1234-5678"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    value={phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* role */}
              <div className="py-4 px-4">
                <InputFormTitle title="Role" required={true} />
                <div className="mt-1 ">
                  <select
                    className={`w-full px-2 py-2 text-gray-700 bg-white border rounded-md cursor-pointer focus:outline-none  focus:border-gray-400 `}
                    value={role}
                    name="role"
                    onChange={handleInputChange}
                  >
                    {roleOptions.map((option, i) => (
                      <option value={option} key={i}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>
          </div>
        </section>
        <SaveAndCancelBtn
          newData={newUser}
          requireOptions={requireOptions}
          mutation={mutation}
          addBtnText={"Register User"}
        />
      </div>
    </div>
  );
}
