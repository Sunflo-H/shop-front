import React, { useEffect, useRef, useState } from "react";
import RadioBtn from "../../components/management/main/UploadProduct/RadioBtn";
import { useDispatch, useSelector } from "react-redux";
import RequireOption from "../../components/management/main/UploadProduct/RequireOption";
import { setNewProduct } from "../../slice/management/createProductSlice";
import SaveAndCancelBtn from "../../components/management/main/UploadProduct/SaveAndCancelBtn";
import SelectBox from "../../components/management/main/ui/SelectBox";

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

  // const handleInputChange = (e) => {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   dispatch(setNewProduct({ key, value }));
  // };

  const handleSelectBoxChage = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const [isCustomDomain, setIsCustomDomain] = useState(true);
  const [emailDomain, setEmailDomain] = useState("");

  const handleDomainChange = (e) => {
    if (e.target.value === "custom") {
      setIsCustomDomain(true);
      setEmailDomain(""); // 직접 입력 필드 초기화
    } else {
      setIsCustomDomain(false);
      setEmailDomain(e.target.value); // 선택된 도메인 설정
    }
  };

  const handleInputChange = (e) => {
    setEmailDomain(e.target.value);
  };

  return (
    <div className="flex h-screen bg-lightblue manage-font">
      <div className="max-w-screen-lg w-screen m-auto pt-6">
        {/* 상단 컨텐츠 */}
        <section className="flex justify-center gap-6 mb-12">
          <div className="w-1/2">
            {/* 좌측 상단 첫번째 컨텐츠 : 상품명, 가격 */}
            <section className="bg-white rounded-md shadow-md px-2 py-4">
              <div className=" py-4 px-4">
                <div className="font-bold">
                  E-Mail <RequireOption />
                </div>
                <div className="flex items-center grow text-start mt-1">
                  <input
                    type="text"
                    name="emailLocal"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 "
                    placeholder="Enter your local"
                    value={useSelector(
                      (state) => state.createProduct.newProduct.name
                    )}
                    required
                    onChange={handleInputChange}
                  />
                  <span className="mx-1">@</span>
                  <input
                    type="text"
                    name="emailDomain"
                    placeholder="Enter your domain"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 mr-2"
                    value={emailDomain}
                    onChange={handleInputChange}
                  />
                  <select
                    className={`w-28 px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:bg-white cursor-pointer
                       ${isCustomDomain && "bg-gray-200 "}`}
                    value={options[0]}
                    name="emailDomain"
                    onChange={handleSelectBoxChage}
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
                <div className="font-bold">
                  Password <RequireOption />
                </div>
                <div className="grow text-start mt-1">
                  <input
                    type="text"
                    name="password"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 mr-2"
                    placeholder="ex) password1234!@"
                    value={useSelector(
                      (state) => state.createProduct.newProduct.name
                    )}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Name
                  <RequireOption />
                </div>
                <div className="flex  mt-1 ">
                  <input
                    type="text"
                    name="name"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2"
                    placeholder="ex) hong gil dong"
                    required
                    value={useSelector(
                      (state) => state.createProduct.newProduct.price
                    )}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className=" py-4 px-4">
                <div className="font-bold">
                  Phone Number
                  <RequireOption />
                </div>
                <div className="flex  mt-1 ">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full outline-none border border-gray-300 rounded-md px-2 py-2 "
                    placeholder="010-1234-5678"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    required
                    value={useSelector(
                      (state) => state.createProduct.newProduct.price
                    )}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="py-4 px-4">
                <div className="font-bold">
                  Role
                  <RequireOption />
                </div>
                <div className="mt-1 ">
                  <select
                    className={`w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white cursor-pointer`}
                    value={roleOptions[0]}
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
