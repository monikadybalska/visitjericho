"use client";

import { useState } from "react";

export default function Form({
  choice,
  options,
}: {
  choice: string | null;
  options: string[];
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

  return (
    <div className="w-full flex justify-center">
      <form
        name="contact-form"
        onSubmit={handleFormSubmit}
        className="flex flex-col w-1/2 border border-orange-light py-6 px-4 rounded-md bg-white"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <h2 className="font-serif mb-6 text-center">Book a tour today</h2>
        <label htmlFor="first-name" className="font-bold">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="first-name"
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
        <label htmlFor="package" className="font-bold">
          Choose a package<span className="text-red-500">*</span>
        </label>
        <select
          name="package"
          className="bg-white border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2 font-sans"
          required
          defaultValue=""
        >
          <option value="" disabled>
            --Please choose an option--
          </option>
          {options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="message" className="font-bold">
          Would you like to add anything else? (optional)
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
      </form>
    </div>
  );
}
