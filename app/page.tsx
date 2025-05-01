"use client";
import { CodeBlock, dracula } from "react-code-blocks";

export default function Home() {
  const tmuxBasicCommands: string = `  #Create a new session
  tmux new -s my-project 
  # List sessions 
  tmux ls 
  # Attach to existing
  session tmux attach -t my-project 
  # Detach from session (keeps running) 
  Prefix + d 
  # Kill session 
  tmux kill-session -t my-project`;

  const tmuxWindowsCommand: string = `# Create new window
Prefix + c
# Switch to window by number
Prefix + [number]
# Next/previous window
Prefix + n / Prefix + p
# Rename window
Prefix + ,
# List windows
Prefix + w`;

  const tmuxPansCommand: string = `# Split vertically
Prefix + %
# Split horizontally
Prefix + "
# Navigate between panes
Prefix + arrow keys
# Toggle pane full-screen
Prefix + z
# Close current pane
Prefix + x
`;

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-invert prose-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">
            Undestanding Tmux
          </h1>
          <p>
            We&apos;ve all been in situations where working on a project
            required opening four or five separate terminal windows.
          </p>
          <p>
            Before we Know it, things turn into complete mess - its hard to keep
            track of which window is doing what, and sometimes ,we accidentally
            close a terminal and lose important progress. Managing multiple
            terminals this way quickly become frustrating, inefficient, and
            error-prone.
          </p>
          <p>This is where tmux comes into rescue.</p>
          <p>
            With tmux, you can manage multiple terminal sessions inside a single
            window, organize them neatly into panes and tabs, and never worry
            about accidental closures or losing your workflow again. Whether
            you&apos;re coding, monitoring logs, running servers, or debugging,
            tmux helps you keep everything organized, efficient, and under
            control.le windows, organize them neatly into panes and tabs, an
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-white w-max">
            What is Tmux?
          </h2>
          <p>
            Tmux lets you run multiple terminal sessions within a single window.
            Perfect for: - Remote server work (sessions persist if connection
            drops) - Multitasking in terminal environments
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-white w-max">
            Core component of Tmux
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2">Session</th>
                  <th className="border border-white px-4 py-2">Windows</th>
                  <th className="border border-white px-4 py-2">Pans</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white px-4 py-2">
                    Collection of windows (a complete working environment)
                  </td>
                  <td className="border border-white px-4 py-2">
                    Like tabs in a browser
                  </td>
                  <td className="border border-white px-4 py-2">
                    Splits within a window (vertical or horizontal divisions)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-white w-max">
            Understanding Tmux server
          </h2>
          <p>
            When you run tmux, it starts a server process in the background.
            This server manages your sessions, windows, and panes — it&apos;s
            like a manager that keeps everything running for you. The tmux
            server is independent of your terminal window. Even if you close
            your terminal, the server keeps your tmux sessions alive. You can
            reconnect to your sessions anytime using tmux attach or tmux
            attach-session.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-white w-max">
            Prefix Key
          </h2>
          <p>
            All tmux commands start with `Ctrl+b` (the prefix) I&apos;ll suggest
            to change to something which u can easily click I use `Alt+j` as my
            fingures rests on these keys by default.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-white w-max">
            Tmux workflow
          </h2>
          <p>
            In Tmux you can have a Session for a project which can hold multiple
            window and each window can have multiple panes as shown in below
            example ..
          </p>

          <h2 className="text-xl font-bold mt-10 mb-2 pb-1 w-max">Session</h2>
          <p>
            When to use: For different projects or workflows. Below are some
            basic tmux commands for managing sessions
          </p>

          <div className=" w-1/2 py-4">
            <CodeBlock
              text={tmuxBasicCommands}
              language={"bash"}
              theme={dracula}
              showLineNumbers={false}
            />
          </div>

          <h2 className="text-xl font-bold mt-10 mb-2 pb-1 w-max">Windows</h2>
          <p>
            When to use: For different tasks within a project. Below are some
            basic tmux commands for managing windows
          </p>

          <div className=" w-1/2 py-4">
            <CodeBlock
              text={tmuxWindowsCommand}
              language={"bash"}
              theme={dracula}
              showLineNumbers={false}
            />
          </div>

          <h2 className="text-xl font-bold mt-10 mb-2 pb-1 w-max">Pans</h2>
          <p>When to use: To view multiple things simultaneously</p>

          <div className=" w-1/2 py-4">
            <CodeBlock
              text={tmuxPansCommand}
              language={"bash"}
              theme={dracula}
              showLineNumbers={false}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

/*

We've all been in situations where working on a project required opening four or five separate terminal windows.

Before we Know it, things turn into complete mess - it's hard to keep track of which window is doing what, and sometimes 
,we accidentally close a terminal and lose important progress.
Managing multiple terminals this way quickly become frustrating, inefficient, and error-prone. 

This is where tmux comes into rescue. 

With tmux, you can manage multiple terminal sessions inside a single window, organize them neatly into panes and tabs,
and never worry about accidental closures or losing your workflow again.
Whether you're coding, monitoring logs, running servers, or debugging, tmux helps you keep everything organized,
efficient, and under control.le windows, organize them neatly into panes and tabs, an

What is Tmux?

Tmux (Terminal Multiplexer) lets you run multiple terminal sessions within a single window. Perfect for:
- Remote server work (sessions persist if connection drops)
- Multitasking in terminal environments

Core component of Tmux 

- **Session**: Collection of windows (a complete working environment)
- **Window**: Like tabs in a browser
- **Pane**: Splits within a window (vertical or horizontal divisions)

You can jump between sessions windows and panes like a magician with some config and pratice.

Understanding Tmux server.

When you run tmux, it starts a server process in the background.
This server manages your sessions, windows, and panes 
— it's like a manager that keeps everything running for you.

The tmux server is independent of your terminal window.
Even if you close your terminal, the server keeps your tmux sessions alive.
You can reconnect to your sessions anytime using tmux attach or tmux attach-session.

Prefix Key
All tmux commands start with `Ctrl+b` (the prefix)
I'll suggest to change to something which u can easily click
I use `Alt+j` as my fingures rests on this keys by default.

Tmux workflow

In Tmux you can have a Session for a project which can hold multiple window and each window can have multiple panes
as shown in below example

Session: project1
├── Window: code
│   ├── Pane 1: Vim/Nvim editor (editing code)
│   └── Pane 2: Git status / Git log
├── Window: server
│   ├── Pane 1: Run backend server (e.g., Flask, Node.js)
└── Window: database
│   └── Pane 2: Tail server logs
    └── Pane 1: Database client (e.g., psql, MySQL)

Sessions

When to use: For different projects or workflows


**Commands**:
```bash
# Create a new session
tmux new -s my-project

# List sessions
tmux ls

# Attach to existing session
tmux attach -t my-project

# Detach from session (keeps running)
Prefix + d

# Kill session
tmux kill-session -t my-project
```

## Slide 4: Windows
**When to use**: For different tasks within a project

**Commands**:
```bash
# Create new window
Prefix + c

# Switch to window by number
Prefix + [number]

# Next/previous window
Prefix + n / Prefix + p

# Rename window
Prefix + ,

# List windows
Prefix + w
```

## Slide 5: Panes
**When to use**: To view multiple things simultaneously

**Commands**:
```bash
# Split vertically
Prefix + %

# Split horizontally
Prefix + "

# Navigate between panes
Prefix + arrow keys

# Toggle pane full-screen
Prefix + z

# Close current pane
Prefix + x
```

## Slide 6: Copy Mode
**When to use**: To scroll, search, and copy text

**Commands**:
```bash
# Enter copy mode
Prefix + [

# Navigate (vim-style)
h, j, k, l or arrow keys

# Start selection
Space

# Copy selection
Enter

# Paste
Prefix + ]

# Search
/
```

## Slide 7: Advanced Features
**Synchronized panes**:
```bash
# Turn on sync (type in all panes at once)
Prefix + :setw synchronize-panes on

# Turn off sync
Prefix + :setw synchronize-panes off
```

**Layouts**:
```bash
# Cycle through layouts
Prefix + Space

# Specific layouts (even-horizontal, even-vertical, main-horizontal, main-vertical, tiled)
Prefix + Alt + 1-5
```

## Slide 8: Configuration
Create a `~/.tmux.conf` file for personalization:

```bash
# Change prefix to Ctrl+a
unbind C-b
set -g prefix C-a

# Mouse mode
set -g mouse on

# Vim-style pane navigation
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Start windows and panes at 1, not 0
set -g base-index 1
setw -g pane-base-index 1
```

## Slide 9: Pro Tips
**Auto-start tmux with zsh**:
Add to `~/.zshrc`:
```bash
# Auto-start tmux
if [ -z "$TMUX" ]; then
    tmux attach -t default || tmux new -s default
fi
```

**Session Management**:
```bash
# Save session layout
tmux-resurrect (plugin)

# Named sessions for different projects
tmux new -s project1
tmux new -s project2
```

## Slide 10: Essential Plugins
Install with [TPM (Tmux Plugin Manager)](https://github.com/tmux-plugins/tpm):

```bash
# ~/.tmux.conf
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @plugin 'christoomey/vim-tmux-navigator'

# Initialize TPM (bottom of file)
run '~/.tmux/plugins/tpm/tpm'
```

**Install plugins**: Prefix + I

 *
 *
 *
 * */
