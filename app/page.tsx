import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhinav | Blogs",
  description: "",
};

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  category: string;
}

const HomePage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Understanding Tmux",
      date: "May 2, 2025",
      category: "guide",
    },
  ];

  return (
    <div className=" flex justify-center w-full ">
      <div className="min-h-screen text-white w-1/2">
        {/* Header/Navigation */}
        <header className="container mx-auto px-4 py-6"></header>

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="py-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hey there!{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <p className="text-lg mb-4">
                I&apos;m Abhinav — welcome to my digital space!
              </p>
              <p className="text-lg mb-4">
                I&apos;m a passionate software engineering student who loves
                building cool stuff, hacking on ideas, and exploring the world
                of code, electronics, and design.
              </p>
              <p className="text-lg mb-4">
                I’ve recently started sharing my thoughts and learnings through
                my{" "}
                <a href="/blog" className="text-yellow-500 hover:underline">
                  blog
                </a>
                . Check out my latest posts{" "}
                <span role="img" aria-label="pointing right">
                  👇
                </span>
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Image
                alt="Abhinav Profile image"
                src={"/profile.jpg"}
                width={200}
                height={200}
              />
            </div>
          </section>

          {/* Separator */}
          <hr className="border-gray-700 my-8" />

          {/* Recent Posts Section */}
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="group">
                  <a
                    href={`/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block"
                  >
                    <h3 className="text-xl text-yellow-500 group-hover:underline">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1 text-gray-400">
                      <span>{post.date}</span>
                      <span>|</span>
                      <span className="capitalize">{post.category}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 text-right hidden">
              <a
                href="/blog"
                className="inline-flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
              >
                All Posts <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </section>

          {/* Bottom Separator */}
          <hr className="border-gray-700 my-8" />

          {/* Footer would go here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
