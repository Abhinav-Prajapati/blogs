"use client";
import React from "react";
import {
  BlogContainer,
  BlogHeader,
  Heading2,
  Heading3,
  Paragraph,
  CodeSection,
  Table,
  Callout,
  Tag,
  Card,
  Divider,
  Accordion,
} from "@/components/blogComponets";

const TmuxBlog: React.FC = () => {
  // Code snippets
  const tmuxBasicCommands = `# Create a new session
tmux new -s my-project 
# List sessions 
tmux ls 
# Attach to existing session 
tmux attach -t my-project 
# Detach from session (keeps running) 
Prefix + d 
# Kill session 
tmux kill-session -t my-project`;

  const tmuxWindowsCommand = `# Create new window
Prefix + c
# Switch to window by number
Prefix + [number]
# Next/previous window
Prefix + n / Prefix + p
# Rename window
Prefix + ,
# List windows
Prefix + w`;

  const tmuxPansCommand = `# Split vertically
Prefix + %
# Split horizontally
Prefix + "
# Navigate between panes
Prefix + arrow keys
# Toggle pane full-screen
Prefix + z
# Close current pane
Prefix + x`;

  const tmuxConfig = `# ~/.tmux.conf example
# Remap prefix from 'C-b' to 'C-a'
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

# Split panes using | and -
bind | split-window -h
bind - split-window -v
unbind '"'
unbind %

# Reload config file
bind r source-file ~/.tmux.conf

# Switch panes using Alt-arrow
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# Enable mouse mode
set -g mouse on

# Set status bar
set -g status-bg black
set -g status-fg white`;

  // Table data
  const headers = ["Session", "Windows", "Panes"];
  const rows = [
    [
      "Collection of windows (a complete working environment)",
      "Like tabs in a browser",
      "Splits within a window (vertical or horizontal divisions)",
    ],
  ];

  return (
    <BlogContainer>
      <BlogHeader
        title="Understanding Tmux"
        subtitle="Master your terminal workflow with the ultimate multiplexer"
      />

      <div className="mb-6">
        <Tag color="purple">Terminal</Tag>
        <Tag color="blue">Productivity</Tag>
        <Tag color="green">Linux</Tag>
      </div>

      <Paragraph>
        We&apos;ve all been in situations where working on a project required
        opening four or five separate terminal windows.
      </Paragraph>

      <Paragraph>
        Before we know it, things turn into a complete mess - it&apos;s hard to
        keep track of which window is doing what, and sometimes, we accidentally
        close a terminal and lose important progress. Managing multiple
        terminals this way quickly becomes frustrating, inefficient, and
        error-prone.
      </Paragraph>

      <Paragraph>This is where tmux comes to the rescue.</Paragraph>

      <Paragraph>
        With tmux, you can manage multiple terminal sessions inside a single
        window, organize them neatly into panes and tabs, and never worry about
        accidental closures or losing your workflow again. Whether you&apos;re
        coding, monitoring logs, running servers, or debugging, tmux helps you
        keep everything organized, efficient, and under control.
      </Paragraph>

      <Heading2>What is Tmux?</Heading2>

      <Paragraph>
        Tmux lets you run multiple terminal sessions within a single window.
        Perfect for:
      </Paragraph>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Organized workspace: Clear separation between code editing, servers,
          and monitoring
        </li>
        <li>
          Persistence: If your SSH connection drops or you need to reboot, your
          work environment stays intact
        </li>
        <li>
          Resource efficiency: One terminal window instead of multiple windows
          cluttering your desktop
        </li>
        <li>
          Faster context switching: Quickly jump between different parts of your
          project with keyboard shortcuts
        </li>
        <li>
          Better multitasking: Monitor logs and server output while editing code
        </li>
      </ul>

      <Heading2>Core Components of Tmux</Heading2>

      <Table headers={headers} rows={rows} />

      <Heading2>Understanding Tmux Server</Heading2>

      <Paragraph>
        When you run tmux, it starts a server process in the background. This
        server manages your sessions, windows, and panes — it&apos;s like a
        manager that keeps everything running for you. The tmux server is
        independent of your terminal window. Even if you close your terminal,
        the server keeps your tmux sessions alive. You can reconnect to your
        sessions anytime using tmux attach or tmux attach-session.
      </Paragraph>

      <Card title="Why Use Tmux?">
        <ul className="list-disc pl-6">
          <li>Session persistence (no more lost work if SSH disconnects)</li>
          <li>Improved terminal organization and multitasking</li>
          <li>Consistent workflow across different environments</li>
          <li>Keyboard-focused interface increases productivity</li>
          <li>Highly customizable to suit your workflow</li>
        </ul>
      </Card>

      <Heading2>Prefix Key</Heading2>

      <Paragraph>
        All tmux commands start with `Ctrl+b` (the prefix). I&apos;ll suggest
        changing to something which you can easily press. I use `Alt+j` as my
        fingers rest on these keys by default.
      </Paragraph>

      <Callout type="info" title="Customizing Your Prefix">
        To change your prefix key, add this to your <code>~/.tmux.conf</code>{" "}
        file:
        <pre className="mt-2 bg-gray-800 p-2 rounded">
          unbind C-b
          <br />
          set-option -g prefix M-j
          <br />
          bind-key M-j send-prefix
        </pre>
      </Callout>

      <Heading2>Tmux Workflow</Heading2>

      <Paragraph>
        In Tmux you can have a Session for a project which can hold multiple
        windows and each window can have multiple panes as shown in the examples
        below.
      </Paragraph>

      <Heading3>Sessions</Heading3>

      <Paragraph>
        When to use: For different projects or workflows. Below are some basic
        tmux commands for managing sessions:
      </Paragraph>

      <CodeSection code={tmuxBasicCommands} language="bash" />

      <Heading3>Windows</Heading3>

      <Paragraph>
        When to use: For different tasks within a project. Below are some basic
        tmux commands for managing windows:
      </Paragraph>

      <CodeSection code={tmuxWindowsCommand} language="bash" />

      <Heading3>Panes</Heading3>

      <Paragraph>
        When to use: To view multiple things simultaneously:
      </Paragraph>

      <CodeSection code={tmuxPansCommand} language="bash" />

      <Divider />

      <Heading2>Advanced Tmux Configuration</Heading2>

      <Paragraph>
        Customizing tmux will help you create a more efficient and enjoyable
        workflow. Here&apos;s a sample configuration file to get you started:
      </Paragraph>

      <CodeSection title="~/.tmux.conf" code={tmuxConfig} language="bash" />

      <Accordion title="Common Tmux Issues & Solutions">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Copy/Paste Not Working</h4>
            <p>Add this to your .tmux.conf:</p>
            <pre className="bg-gray-800 p-2 rounded mt-1">
              # For macOS
              <br />
              set-option -g default-command &quot;reattach-to-user-namespace -l
              bash&quot;
              <br />
              <br />
              # For Linux
              <br />
              bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel
              &apos;xclip -in -selection clipboard&apos;
            </pre>
          </div>

          <div>
            <h4 className="font-bold">Colors Not Displaying Correctly</h4>
            <p>Add this to your .tmux.conf:</p>
            <pre className="bg-gray-800 p-2 rounded mt-1">
              set -g default-terminal &quot;screen-256color&quot;
              <br />
              set -ga terminal-overrides &quot;,*256col*:Tc&quot;
            </pre>
          </div>
        </div>
      </Accordion>

      <Heading2>Conclusion</Heading2>

      <Paragraph>
        Tmux is an essential tool for anyone who spends significant time in the
        terminal. By mastering sessions, windows, and panes, you can transform
        your terminal workflow into a highly efficient and organized system.
        Start with the basics, gradually incorporate more advanced features, and
        customize your setup to match your specific needs.
      </Paragraph>

      <Callout type="success" title="Next Steps">
        Install tmux today with <code>apt install tmux</code> (Ubuntu/Debian),
        <code>brew install tmux</code> (macOS), or your system&apos;s package
        manager. Then create your first session with{" "}
        <code>tmux new -s myproject</code>!
      </Callout>
    </BlogContainer>
  );
};

export default TmuxBlog;
