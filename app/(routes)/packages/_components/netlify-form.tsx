"use client";

import { Providers } from "@/app/_lib/providers";
import { Button } from "../../../_components/exports";

export default function NetlifyForm() {
  return (
    <div className="flex justify-center">
      <form
        name="contact"
        action="/success"
        method="POST"
        className="flex flex-col w-1/2 border border-orange-light py-6 px-4 rounded-md"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="font-serif mb-6 text-center">Book a tour today</h2>
        <label htmlFor="firstname" className="font-bold">
          First Name:
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        />
        <label htmlFor="lastname" className="font-bold">
          Last Name:
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        />
        <label htmlFor="email" className="font-bold">
          Your Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        />
        <label htmlFor="message" className="font-bold">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="border border-[lightgray] rounded-md mt-2 mb-6 font-light p-2"
        ></textarea>
        <Providers>
          <Button color="orange" className="w-fit" type="submit">
            Book a tour
          </Button>
        </Providers>
      </form>
    </div>
  );
}
