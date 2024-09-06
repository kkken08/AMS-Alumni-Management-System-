import Image from "next/image";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function News() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <AppBar position="static" className="mb-6">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div">
            Alumni Management System
          </Typography>
          <div className="flex space-x-4">
            <Button variant="contained" color="secondary" component={Link} href="/home">
              Home
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/news">
              News
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/about">
              About
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/login">
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="mt-16 max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">News</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">News Title 1</h3>
              <p className="text-gray-700">Brief description of the news item. This could be an update or a recent announcement relevant to alumni.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">News Title 2</h3>
              <p className="text-gray-700">Brief description of the news item. Provide a summary of key details or links to full articles.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Events</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Event Title 1</h3>
              <p className="text-gray-700">Brief description of the event. Include details like date, time, and how to participate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Event Title 2</h3>
              <p className="text-gray-700">Brief description of the event. Highlight key information and encourage alumni to get involved.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
