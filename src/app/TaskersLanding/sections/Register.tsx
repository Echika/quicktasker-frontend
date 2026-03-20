"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import Tasker1 from "../../../../public/images/tasker1.svg";
import Tasker2 from "../../../../public/images/tasker2.svg";
import Tasker3 from "../../../../public/images/tasker3.svg";
import Tasker4 from "../../../../public/images/tasker4.svg";
import Tasker5 from "../../../../public/images/tasker5.svg";
import Tasker6 from "../../../../public/images/tasker6.svg";
import Tasker7 from "../../../../public/images/tasker7.svg";
import Tasker8 from "../../../../public/images/tasker8.svg";
import Tasker9 from "../../../../public/images/tasker9.svg";
import Tasker10 from "../../../../public/images/Step1Image.svg";
import Tasker11 from "../../../../public/images/Step2Image.png";
import Tasker12 from "../../../../public/images/Step3Image.svg";

interface RemoveCategoryFn {
  (categoryToRemove: string): void;
}

export default function Register() {
  // Array of all tasker images for easier management
  const taskerImages = [
    Tasker1,
    Tasker2,
    Tasker3,
    Tasker4,
    Tasker5,
    Tasker6,
    Tasker7,
    Tasker8,
    Tasker9,
    Tasker10,
    Tasker11,
    Tasker12,
  ];

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taskType, setTaskType] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [otherCategory, setOtherCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Available categories
  const categoryOptions = [
    "Plumbing",
    "Electrical",
    "Cleaning",
    "Carpentry",
    "Gardening",
    "Painting",
    "Moving",
    "Delivery",
    "Others",
  ];

  // Handle category selection
  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") return;

    if (value === "Others") {
      setSelectedCategory("Others");
    } else if (!categories.includes(value)) {
      setCategories([...categories, value]);
      setSelectedCategory("");
    }
  };

  // Add custom category
  const addOtherCategory = () => {
    if (otherCategory.trim() && !categories.includes(otherCategory)) {
      setCategories([...categories, otherCategory]);
      setOtherCategory("");
      setSelectedCategory("");
    }
  };

  // Remove a category
  const removeCategory: RemoveCategoryFn = (categoryToRemove) => {
    setCategories(categories.filter((cat) => cat !== categoryToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    
    // Frontend validation
    if (!firstName || !surname || !email || !phone || !taskType) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (taskType === "post" && !description) {
      setError("Description is required for task posters");
      setLoading(false);
      return;
    }

    if (taskType === "search" && categories.length === 0) {
      setError("Please select at least one category");
      setLoading(false);
      return;
    }


    try {
      // Prepare data for API
      const userData = {
        firstName,
        surname,
        email,
        phone,
        userType: taskType, // 'post' or 'search'
        ...(taskType === "post" ? { description } : { categories }),
      };

      // Send to Next.js API
      const response = await fetch("https://api-aope3c2hga-uc.a.run.app/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed");
      }

      // setSuccess(true);
      setShowSuccessModal(true);
      // Reset form
      setFirstName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setTaskType("");
      setDescription("");
      setCategories([]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during registration");
      } else {
        setError("An error occurred during registration");
      }
    } finally {
      setLoading(false);
    }
  };

  // Close modal after 3 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessModal) {
      timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal]);

  return (
    <div
      id="registerForm"
      className=" max-w-[1512px] max-h-[1270px] bg-blue-600 flex items-center justify-center p-4"
    >
      <Head>
        <title>Join Plentytask | Registration</title>
        <meta
          name="description"
          content="Register with Plentytask to find work or post tasks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 animate-scaleIn">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-800">
                Registration Successful!
              </h2>
              <p className="mt-2 text-gray-600">
                We&#39;ll contact you shortly to complete your account setup.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-6 w-32 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main container with background collage */}
      <div className="w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl bg-gray-100 rounded-3xl overflow-hidden relative">
        {/* Background image collage - hidden on mobile for simplicity */}
        <div className="absolute inset-0 grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-6 opacity-40 hidden md:grid">
          {/* Render all tasker images in the grid */}
          {taskerImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-full w-full"
            >
              <Image
                src={image}
                alt={`Tasker example ${index + 1}`}
                fill
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Mobile background - simplified version with fewer images */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 opacity-40 md:hidden">
          {/* Show only 10 images on mobile */}
          {taskerImages.slice(0, 10).map((image, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-36">
              <Image
                src={image}
                alt={`Tasker example ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Registration form card */}
        <div className="relative flex justify-center items-center py-12 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Ready to Experience Plentytask?
              </h1>
              <p className="text-gray-600">
                Join our platform to find tasks or offer your services
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name fields */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="surname" className="block text-gray-700 mb-1">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Surname"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={loading}
                  />
                </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={loading}
                />
              </div>

              {/* Task Type Selection */}
              <div>
                <label htmlFor="taskType" className="block text-gray-700 mb-1">
                  You want to:
                </label>
                <div className="relative">
                  <select
                    id="taskType"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                    disabled={loading}
                  >
                    <option value="">Select an option</option>
                    <option value="post">Post a task</option>
                    <option value="search">Search for task</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Conditionally show fields based on task type */}
              {taskType === "post" && (
                <div>
                  <label
                    htmlFor="description"
                    className="block text-gray-700 mb-1"
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief Description of the task you want done"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={loading}
                  ></textarea>
                </div>
              )}

              {taskType === "search" && (
                <div className="space-y-4">
                  {/* Category selection */}
                  <div>
                    <label
                      htmlFor="categories"
                      className="block text-gray-700 mb-1"
                    >
                      Select Categories
                    </label>
                    <div className="relative">
                      <select
                        id="categories"
                        value={selectedCategory}
                        onChange={handleCategorySelect}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        disabled={loading}
                      >
                        <option value="">Select categories</option>
                        {categoryOptions.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Other category input */}
                  {selectedCategory === "Others" && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={otherCategory}
                        onChange={(e) => setOtherCategory(e.target.value)}
                        placeholder="Specify your category"
                        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={addOtherCategory}
                        className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        disabled={loading}
                      >
                        Add
                      </button>
                    </div>
                  )}

                  {/* Selected categories */}
                  {categories.length > 0 && (
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Selected Categories:
                      </label>
                      <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[60px]">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-full"
                          >
                            <span className="text-sm">{category}</span>
                            <button
                              type="button"
                              onClick={() => removeCategory(category)}
                              className="text-gray-500 hover:text-red-500 disabled:opacity-50"
                              disabled={loading}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {error && (
                <div className="text-red-500 py-2 text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}