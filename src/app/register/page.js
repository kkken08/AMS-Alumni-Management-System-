import Image from "next/image";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
            Sign up for an account
          </h2>
          
          <form className="space-y-6" action="#" method="POST">
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Batch
                </label>
                <select
                  id="batch"
                  name="batch"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Batch</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="CCA">College of Customs Administration</option>
                  <option value="CBA">College of Business Administration</option>
                  <option value="CCS">College of Computer Studies</option>
                </select>
              </div>

              <div className="w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Course
                </label>
                <select
                  id="course"
                  name="course"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="BSCE">BS in Computer Engineering</option>
                  <option value="BSEE">BS in Electrical Engineering</option>
                  <option value="BSECE">BS in Electronics & Communications Engineering</option>
                  <option value="BSIE">BS in Industrial Engineering</option>
                  <option value="BSCS">BS in Computer Science</option>
                  <option value="BSIT">BS in Information Technology</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Employment Status
              </label>
              <select
                id="employment-status"
                name="employment-status"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Employment Status</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div>
              <a
                href="/login"
                className="text-xs text-black-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Already have an account? Login
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm border border-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
