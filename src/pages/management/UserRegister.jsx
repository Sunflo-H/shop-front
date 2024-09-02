import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RequireOption from "../../components/management/main/UploadProduct/RequireOption";

import SaveAndCancelBtn from "../../components/management/main/UploadProduct/SaveAndCancelBtn";
import InputFormTitle from "../../components/management/main/ui/InputFormTitle";

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
  // 입력 폼 관련 상태값
  const [input, setInput] = useState("");
  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [role, setRole] = useState("");

  const [isCustomDomain, setIsCustomDomain] = useState(true);

  const handleEmailLocalChange = (e) => {
    const value = e.target.value;
    setEmailLocal(value);
  };

  const handleEmailDomainChange = (e) => {
    const value = e.target.value;
    setEmailDomain(value);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSelectBoxChage = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setRole(e.target.value);
  };
  console.log(role);

  return (
    <div className="flex h-screen bg-lightblue manage-font">
      <div className="max-w-screen-lg w-screen m-auto pt-6">
        {/* 상단 컨텐츠 */}
        <section className="flex justify-center gap-6 mb-12">
          <div className="w-1/2">
            {/* 좌측 상단 첫번째 컨텐츠 : 상품명, 가격 */}
            <section className="bg-white rounded-md shadow-md px-2 py-4">
              <div className=" py-4 px-4">
                <InputFormTitle title="E-Mail" required={true} />
                <div className="flex items-center grow text-start mt-1">
                  <input
                    type="text"
                    name="emailLocal"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 "
                    placeholder="Enter your local"
                    value={emailLocal}
                    onChange={handleEmailLocalChange}
                  />
                  <span className="mx-1">@</span>
                  <input
                    type="text"
                    name="domain"
                    placeholder="Enter your domain"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 mr-2"
                    value={emailDomain}
                    onChange={handleEmailDomainChange}
                  />
                  <select
                    className={`w-28 px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:bg-white cursor-pointer
                       ${isCustomDomain && "bg-gray-200 "}`}
                    value={options[0]}
                    name="emailDomain"
                    onChange={handleEmailDomainChange}
                  >
                    {options.map((option, i) => (
                      <option value={option} key={i}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" py-4 px-4">
                <InputFormTitle title="Password" required={true} />
                <div className="grow text-start mt-1">
                  <input
                    type="text"
                    name="password"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 mr-2"
                    placeholder="ex) password1234!@"
                    value={input.password}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <InputFormTitle title="Name" required={true} />
                <div className="flex  mt-1 ">
                  <input
                    type="text"
                    name="name"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2"
                    placeholder="ex) hong gil dong"
                    required
                    value={input.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <InputFormTitle title="Phone Number" required={true} />
                <div className="flex  mt-1 ">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 "
                    placeholder="010-1234-5678"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    required
                    value={input.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="py-4 px-4">
                <InputFormTitle title="Role" required={true} />
                <div className="mt-1 ">
                  <select
                    className={`w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white cursor-pointer`}
                    value={role}
                    name="role"
                    onChange={handleSelectBoxChage}
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
        <SaveAndCancelBtn />
      </div>
    </div>
  );
}
