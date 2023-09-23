"use client";
import React from "react";
import TextField from "../shared/TextField";
import { Button } from "../shared/Button";

import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { successIcon } from "@/app/constants/assets";
import { motion } from "framer-motion";

const baseUrl = "https://backend.getlinked.ai";

// form validation
const validationSchema = yup.object({
  first_name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Minimum characters is 3"),
  phone_number: yup
    .string()
    .required("Please enter your phone number")
    .min(11, "Minimum characters is 11"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Please enter your message"),
});

const ContactForm = () => {
  const [error, setError] = React.useState(null);
  const [sent, setSent] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        // SUBMIT for to /hackathon/registration
        const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          setError(response.statusText);
          return;
        }

        // show success modal
        setSent(true);
        // reset form
        formik.resetForm();
        return;
      } catch (error) {
        setError(error.message);
      }
    },
  });
  const params = useSearchParams();
  return (
    <div className="w-full bg-forgroud shadow lg:border border-primary/30 lg:p-[40px] rounded-md backdrop-blur">
      <h4 className="font-semibold lg:leading-[40px] leading-[25px] text-lg md:text-[30px]">
        Questions or need assistance? Let us know about it!
      </h4>

      <div className="W-full mt-[40px] flex flex-col gap-y-6">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-7 w-full"
        >
          <div className="grid gap-6">
            <TextField
              name="first_name"
              label="Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              error={
                formik.errors.first_name && formik.touched.first_name
                  ? formik.errors.first_name
                  : null
              }
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              helperText="Please enter a valid email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
            <TextField
              name="phone_number"
              label="Phone Number"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              error={
                formik.errors.phone_number && formik.touched.phone_number
                  ? formik.errors.phone_number
                  : null
              }
            />
            <TextField
              name="message"
              label="Message"
              isTextArea={true}
              helperText="Please enter a clear and concise message, we will get back to you shortly."
              onChange={formik.handleChange}
              value={formik.values.message}
              error={
                formik.errors.message && formik.touched.message
                  ? formik.errors.message
                  : null
              }
            />
          </div>

          {/* show success message */}
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-x-4 grid-cols-[auto_1fr] p-5 border border-green-400 bg-forgroud/90 rounded-lg"
            >
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={successIcon}
                  alt="success"
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <p className="font-semibold">
                Your message has been delivered successfully, we will get back
                to you shortly
              </p>
            </motion.div>
          )}
          <div>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              style={{
                opacity: formik.isSubmitting ? 0.4 : 1,
              }}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
