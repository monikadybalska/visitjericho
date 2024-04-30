"use client";

import { Providers } from "@/app/_lib/providers";
import { Button } from "../../../_components/exports";

const formSubmissionHandler = (event: any) => {
  event.preventDefault();

  const formElement = event.target;
  const { action, method } = formElement;
  const body = new FormData(formElement);

  fetch(action, {
    method,
    body,
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error");
    });
};

export default function Form() {
  return (
    <div className="flex justify-center">
      <form
        action=""
        method="POST"
        className="flex flex-col w-1/2 border border-orange-light py-6 px-4 rounded-md"
        onSubmit={(e) => formSubmissionHandler(e)}
      >
        <h2 className="font-serif mb-6 text-center">Book a tour today</h2>
        <label htmlFor="firstName" className="font-bold">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        />
        <label htmlFor="lastName" className="font-bold">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        />
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="border border-[lightgray] rounded-md mt-2 font-light p-2"
        />
        <Providers>
          <Button color="orange" className="mt-6 w-fit" type="submit">
            Book a tour
          </Button>
        </Providers>
      </form>
    </div>
  );
}
