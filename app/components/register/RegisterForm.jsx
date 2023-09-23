"use client";
import React from "react";
import TextField from "../shared/TextField";
import { Button } from "../shared/Button";

import { useFormik } from "formik";
import * as yup from "yup";
import SelectField from "../shared/SelectField";
import { groupSizes } from "@/app/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { SuccessfulRegistrationModal } from ".";

const baseUrl = "https://backend.getlinked.ai";

// form validation
const validationSchema = yup.object({
  phone_number: yup
    .string()
    .required("Please enter your phone number")
    .min(11, "Minimum characters is 11"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  team_name: yup.string().required("Please enter your team name"),
  group_size: yup
    .number()
    .min(1, "Please select your group size")
    .required("Please select your group size"),
  project_topic: yup.string().required("Please enter your project topic"),
  category: yup
    .number()
    .min(1, "Please select your category")
    .required("Please select your category"),
});

const RegisterForm = () => {
  const [categories, setCategories] = React.useState([]);
  const [loadingCategories, setLoadingCategories] = React.useState(false);
  const [error, setError] = React.useState(null);

  const router = useRouter();

  const getCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await fetch(`${baseUrl}/hackathon/categories-list`);
      const data = await response.json();
      // map categories to a list id as value and name as name
      const categories = await data.map((category) => ({
        value: category.id,
        name: category.name,
      }));
      setCategories(categories);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingCategories(false);
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone_number: "",
      team_name: "",
      group_size: 0,
      project_topic: "",
      category: 0,
      privacy_poclicy_accepted: true,
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        // SUBMIT for to /hackathon/registration
        const response = await fetch(`${baseUrl}/hackathon/registration`, {
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
        router.push("?success=TRUE");
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
    <>
      {params.has("success") && params.get("success") === "TRUE" && (
        <SuccessfulRegistrationModal />
      )}
      <div className="w-full bg-forgroud shadow lg:border border-primary/30 lg:p-[40px] rounded-md backdrop-blur">
        <h4 className="text-primary font-semibold lg:leading-[40px] leading-[25px] text-lg md:text-[30px]">
          Register
        </h4>

        <div className="flex items-end ">
          <p className="font-semibold text-sm lg:text-lg">
            Be part of this movement!
          </p>
          <div className="flex relative border-b border-dashed border-primary px-[40px]">
            <span className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] relative lady"></span>
            <span className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] relative male"></span>
          </div>
        </div>

        <h4 className="text-white text-[20px] lg:text-[30px] my-7">
          CREATE YOUR ACCOUNT
        </h4>

        <div className="W-full mt-[40px] flex flex-col gap-y-6">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-7 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <TextField
                name="team_name"
                label="Team's Name"
                type="text"
                helperText="Enter the name of your group"
                onChange={formik.handleChange}
                value={formik.values.team_name}
                error={
                  formik.errors.team_name && formik.touched.team_name
                    ? formik.errors.team_name
                    : null
                }
              />
              <TextField
                name="phone_number"
                label="Phone Number"
                type="tel"
                helperText="Enter your phone number"
                onChange={formik.handleChange}
                value={formik.values.phone_number}
                error={
                  formik.errors.phone_number && formik.touched.phone_number
                    ? formik.errors.phone_number
                    : null
                }
              />
              <TextField
                name="email"
                label="Mail Address"
                type="email"
                helperText="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
              />
              <TextField
                name="project_topic"
                label="Project Topic"
                type="text"
                helperText="What is your group project topic"
                onChange={formik.handleChange}
                value={formik.values.project_topic}
                error={
                  formik.errors.project_topic && formik.touched.project_topic
                    ? formik.errors.project_topic
                    : null
                }
              />

              <SelectField
                name="category"
                label="Category"
                options={categories}
                onChange={formik.handleChange}
                value={formik.values.category}
                error={
                  formik.errors.category && formik.touched.category
                    ? formik.errors.category
                    : null
                }
                loading={loadingCategories}
              />
              <SelectField
                name="group_size"
                label="Group Size"
                options={groupSizes}
                onChange={formik.handleChange}
                value={formik.values.group_size}
                error={
                  formik.errors.group_size && formik.touched.group_size
                    ? formik.errors.group_size
                    : null
                }
                loading={false}
              />
            </div>
            <div className="relative">
              <p className="text-secondary text-sm mb-7">
                Please review your registration details before submitting
              </p>
              <p className="text-white my-4">
                By clicking submit, you agree to our{" "}
                <span className="text-primary cursor-pointer">event terms</span>{" "}
                and{" "}
                <span className="text-primary cursor-pointer">conditions</span>{" "}
                and{" "}
                <span className="text-primary cursor-pointer">
                  privacy policy
                </span>
              </p>
            </div>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              style={{
                opacity: formik.isSubmitting ? 0.4 : 1,
              }}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
