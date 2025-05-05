"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

// Props interfaces
interface BlogContainerProps {
  children: ReactNode;
}

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
}

interface HeadingProps {
  children: ReactNode;
}

interface ParagraphProps {
  children: ReactNode;
}

type CodeProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};

interface TableProps {
  headers: string[];
  rows: string[][];
}

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

interface BlockQuoteProps {
  children: ReactNode;
  author?: string;
}

interface CalloutProps {
  type?: "info" | "warning" | "error" | "success";
  title?: string;
  children: ReactNode;
}

interface TagProps {
  children: ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
}

interface CardProps {
  title?: string;
  children: ReactNode;
}

interface AccordionProps {
  title: string;
  children: ReactNode;
}

interface CodeSectionProps {
  title?: string;
  code: string;
  language?: string;
}

interface BlogPostProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  tags?: Array<{
    name: string;
    color?: "blue" | "green" | "red" | "yellow" | "purple";
  }>;
  children: ReactNode;
}

// Container component for the blog page
export const BlogContainer: React.FC<BlogContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      <div className="w-full md:w-4/5 lg:w-3/5 xl:w-[50%] mx-auto py-12 px-4">
        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
};

// Header component with title and optional subtitle
export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold mb-4 text-yellow-500">{title}</h1>
      {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
    </header>
  );
};

// Heading components for different levels
export const Heading1: React.FC<HeadingProps> = ({ children }) => (
  <h1 className="text-4xl font-bold mb-8 text-yellow-500">{children}</h1>
);

export const Heading2: React.FC<HeadingProps> = ({ children }) => (
  <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-yellow-400 text-yellow-400 w-max">
    {children}
  </h2>
);

export const Heading3: React.FC<HeadingProps> = ({ children }) => (
  <h3 className="text-xl font-bold mt-10 mb-2 pb-1 w-max text-yellow-400">
    {children}
  </h3>
);

// Paragraph component
export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="my-4 text-lg leading-relaxed">{children}</p>
);

export const Code: React.FC<CodeProps> = ({
  code,
  language = "bash",
  showLineNumbers = false,
}) => {
  const [showLines, setShowLines] = useState(showLineNumbers);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast("Code copied to clipboard!");
    } catch (error) {
      toast("Failed to copy code.");
    }
  };

  return (
    <div className="w-full py-4 overflow-x-auto">
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          style: {
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", // for Safari
            border: "0.5px solid white",
            background: "rgba(0, 0, 0, 0.3)",
            color: "white",
            padding: "8px",
          },
        }}
      />

      <div className="bg-gray-800/50 rounded-md border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <span className="text-xs font-mono text-gray-400">{language}</span>
          <div className="flex space-x-2">
            <button
              className="text-xs text-gray-400 hover:text-white"
              onClick={() => setShowLines(!showLines)}
            >
              {showLines ? "Hide line numbers" : "Show line numbers"}
            </button>
            <button
              className="text-xs text-gray-400 hover:text-white"
              onClick={handleCopy}
            >
              Copy code
            </button>
          </div>
        </div>
        <div className="p-4">
          <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers={showLines}
            wrapLongLines={true}
            customStyle={{
              background: "transparent",
              padding: 0,
              margin: 0,
              fontSize: "0.875rem",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

// Table component
export const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6 overflow-hidden rounded-lg shadow-lg border-[1px] border-gray-200">
    <table className="w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-2 text-left border-b border-r  bg-black/15"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-4 py-2 border-r border-white/50"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Image component
export const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => (
  <figure className="my-6">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 700px"
    />
    {caption && (
      <figcaption className="text-center mt-2 text-gray-400">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Blockquote component
export const BlockQuote: React.FC<BlockQuoteProps> = ({ children, author }) => (
  <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic">
    <p className="mb-2">{children}</p>
    {author && <cite className="text-gray-400 not-italic">— {author}</cite>}
  </blockquote>
);

// Section divider
export const Divider: React.FC = () => <hr className="my-8 border-gray-700" />;

// Callout/Note component
export const Callout: React.FC<CalloutProps> = ({
  type = "info",
  title,
  children,
}) => {
  const styles = {
    info: "bg-blue-900/30 border-blue-500",
    warning: "bg-yellow-900/30 border-yellow-500",
    error: "bg-red-900/30 border-red-500",
    success: "bg-green-900/30 border-green-500",
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-lg ${styles[type]}`}>
      {title && <div className="font-bold mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  );
};

// Tag component
export const Tag: React.FC<TagProps> = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-900/50 text-blue-200 border border-blue-500",
    green: "bg-green-900/50 text-green-200 border border-green-500",
    red: "bg-red-900/50 text-red-200 border border-red-500",
    yellow: "bg-yellow-900/50 text-yellow-200 border border-yellow-500",
    purple: "bg-purple-900/50 text-purple-200 border border-purple-500",
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded-md mr-2 mb-2 text-sm ${colors[color]}`}
    >
      {children}
    </span>
  );
};

// Card component
export const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="border border-gray-700 rounded-lg p-6 my-6">
    {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
    {children}
  </div>
);

// Toggle/Accordion component
export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg my-4">
      <button
        className="w-full text-left p-4 font-medium flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-gray-700">{children}</div>
      )}
    </div>
  );
};

// Code section with title
export const CodeSection: React.FC<CodeSectionProps> = ({
  title,
  code,
  language = "bash",
}) => (
  <div className="my-6">
    {title && (
      <div className="font-mono text-sm mb-2 text-gray-400">{title}</div>
    )}
    <Code code={code} language={language} />
  </div>
);

// Example of a default blog post layout component
const BlogPost: React.FC<BlogPostProps> = ({
  title,
  subtitle,
  author,
  date,
  tags = [],
  children,
}) => {
  return (
    <BlogContainer>
      <BlogHeader title={title} subtitle={subtitle} />

      <div className="flex items-center mb-8 text-gray-400 text-sm">
        {author && <span className="mr-4">By {author}</span>}
        {date && <span>{date}</span>}
      </div>

      {tags.length > 0 && (
        <div className="mb-8">
          {tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </div>
      )}

      {children}
    </BlogContainer>
  );
};

export default BlogPost;
