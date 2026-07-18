# Error Matrix

Open-source bug reporting with the context engineers actually need.

Error Matrix helps teams capture infrastructure bugs, attach live operational context automatically, and synchronize reports seamlessly with a remote database cluster.

Website · Documentation · Cloud App · Live Demo

GitHub Repo stars GitHub License JavaScript

Error Matrix preview

## Why Error Matrix
Error Matrix is a modern, open-source alternative to heavy, bloated issue tracking tools. It is built for engineering teams that want faster bug reproduction and immediate visual sorting without giving up control over their tech stack.

* Capture bugs with custom severity matrices directly in the browser terminal layout
* Include operational system states, active operator identities, and clearance levels automatically
* Synchronize updates instantly with active MongoDB collection pipelines
* Run the entire dashboard out of a zero-dependency deployment structure

## What Makes It Useful
Every dashboard pane is designed to reduce the usual debugging back-and-forth.

| Area | What Error Matrix includes |
| :--- | :--- |
| `Capture` | One-click ticket creation with direct priority tier mapping |
| `Reproduction` | Recorded real-time operational log streams to help track runtime errors |
| `Technical context` | Automatic calculations for P0-P3 counts and live synchronization metrics |
| `Clearance Tiers` | Role-based operational interfaces tailored for Admins, Testers, and Developers |
| `Interface Control` | Dynamic dark/light mode optimization utilizing native CSS root engines |
| `Deployment` | Quick and seamless standalone single-file deployment workflow |

## Quick Start

### Production Instance
The fastest path to load the dashboard mapping directly to your live orchestration database is from a clean repository replication:

```bash
git clone [https://github.com/sai35-git/ERROR-MATRIX](https://github.com/sai35-git/ERROR-MATRIX)
cd ERROR-MATRIX
By default, the layout engine interfaces asynchronously with the live ingestion target point:
https://error-matrix-2-0o5p.onrender.com/api/bugs
​Useful links:
​Self-hosting quick start
​Production deployment guide
​Self-hosting troubleshooting
​Local development
​To run an isolated development pipeline or customize tracking components locally:

# Option A: For Node.js environments
npx serve .

# Option B: For Python environments
python -m http.server 8080
Then configure your local routes to view the application:
​Default local ports:
​web: http://localhost:3000
​server: http://localhost:8080
​See CONTRIBUTING.md for the full workflow.
​Integrating the API Pipeline
​Error Matrix interacts automatically with your live data layer using standard asynchronous network calls:
import { init } from "@error-matrix/core"

init({
  key: "crk_your_public_key",
  host: "[https://error-matrix-2-0o5p.onrender.com/api/bugs](https://error-matrix-2-0o5p.onrender.com/api/bugs)",
})
That mounts the capture launcher so users can submit screenshot or screen recording bug reports without leaving your product.
​Monorepo Overview
​Error Matrix is engineered with a clean, low-overhead file deployment structure:
PathPurpose
index.htmlUnified core application page containing all structure elements, responsive variables, and logic routines
package.jsonSystem manifest defining configurations and backend platform deployment hooks
README.mdCore framework documentation and deployment index guide (This file)
Contributing
​Issues, pull requests, and feedback are welcome.
​Contributing guide
​Security policy
​License
​Licensed under the MIT License.
