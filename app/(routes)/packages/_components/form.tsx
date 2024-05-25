"use client";

import React, { ChangeEvent, useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import FormSuccess from "./form-success";
import FormError from "./form-error";

export default function Form({
  onClose,
  choice,
  setChoice,
  summary,
  setSummary,
  options,
}: {
  onClose: any;
  choice: string | null;
  setChoice: React.Dispatch<React.SetStateAction<string | null>>;
  summary: string | null;
  setSummary: React.Dispatch<React.SetStateAction<string | null>>;
  options: { title: string; summary?: string }[];
}) {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm: any = event.target;
      const formData: any = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChoice(e.target.value);
    setSummary(
      options.find((el) => el.title === e.target.value)?.summary || null
    );
  };

  return (
    <div
      className="w-10/12 lg:w-1/2 flex justify-center top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-full"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        name="contact-form"
        onSubmit={handleFormSubmit}
        className="flex flex-col w-full border border-orange-light py-6 px-4 rounded-md bg-white relative"
      >
        <button onClick={onClose} className="absolute right-4" id="closeForm">
          <XMarkIcon
            className="h-6 w-6"
            strokeWidth={2}
            aria-label="Close form"
          />
        </button>
        {!status && (
          <>
            <input type="hidden" name="form-name" value="contact-form" />
            <h2 className="font-serif mb-6 text-center">Book a tour today</h2>
            <label htmlFor="first-name" className="font-bold">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="firstName"
              className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
              required
            />
            <label htmlFor="last-name" className="font-bold">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
              required
            />
            <label htmlFor="email" className="font-bold">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
              required
            />
            <label htmlFor="phone" className="font-bold">
              Phone number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
            />
            <label htmlFor="package" className="font-bold">
              Choose a package<span className="text-red-500">*</span>
            </label>
            <p>{summary}</p>
            <select
              name="package"
              className="bg-white border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2 font-sans"
              required
              defaultValue={choice || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                --Please choose an option--
              </option>
              {options.map((option, i) => (
                <option value={option.title} key={i}>
                  {option.title}
                </option>
              ))}
            </select>
            <label htmlFor="message" className="font-bold">
              Would you like to add anything else? (Optional)
            </label>
            <input
              name="message"
              type="text"
              className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
            />
            <button
              className="w-fit bg-orange text-white border border-orange uppercase font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-orange hover:shadow-orange hover:shadow-[7px_7px_0_0_rgba(0,0,0,1)]"
              type="submit"
            >
              Book a tour
            </button>
          </>
        )}
        {(status === "ok" || status === "pending") && <FormSuccess />}
        {status === "error" && <FormError error={error} />}
      </form>
    </div>
  );
}
