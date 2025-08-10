# Nx Workspace Usage Guide

This guide explains how to work with the romcal Nx integrated monorepo workspace, including running commands, understanding targets, and managing projects.

## Workspace Structure

The romcal repository is organized as an Nx integrated monorepo with the following structure:

```bash
romcal/
├── apps/               # Application projects
│   └── docs/           # VitePress documentation app
├── libs/               # Library projects (future)
├── tools/              # Build tools and scripts
│   └── scripts/        # Utility scripts
├── dist/               # Build outputs
├── node_modules/       # Dependencies (single installation)
├── nx.json             # Nx workspace configuration
├── package.json        # Single workspace package.json
└── tsconfig.base.json  # Base TypeScript configuration
```

## Important: Always Use npx

**Always use `npx nx ...` to run commands, never just `nx ...`**

This ensures you're using the locally installed version of Nx rather than any global installation.

## Understanding Targets

In Nx, **targets** are predefined tasks configured for each project. They define what actions can be performed on a project (build, test, lint, etc.).

### Workspace-Level Targets

These targets operate on workspace-level files (configuration files in the root):

- **`format:check`** - Check code formatting with Prettier (workspace files only)
- **`format:fix`** - Fix code formatting with Prettier (workspace files only)
- **`lint:check`** - Check linting with ESLint (workspace files only)
- **`lint:fix`** - Fix linting issues with ESLint (workspace files only)
- **`lint-staged`** - Run formatting and linting on staged files (pre-commit hook)

### Project-Level Targets

These targets operate on specific projects (e.g., `docs`):

- **`build`** - Build the project for production
- **`dev`** - Start development server
- **`serve`** - Serve the built application
- **`test`** - Run tests with Vitest
- **`test:watch`** - Run tests in watch mode
- **`lint:check`** - Check linting for the project
- **`lint:fix`** - Fix linting issues for the project
- **`check-links`** - Check for broken links in documentation (docs only)
- **`sort-glossary`** - Sort glossary entries alphabetically (docs only)
- **`generate-version`** - Generate version constants (docs only)

## Running Commands

### Single Project Commands

There are two equivalent syntaxes for running targets on a single project with `nx run` ([docs](https://nx.dev/nx-api/nx/documents/run)):

```bash
# Syntax 1: npx nx run <project>:<target>
npx nx run docs:build
npx nx run docs:lint:check
npx nx run docs:test

# Syntax 2: npx nx <target> <project>
npx nx build docs
npx nx test docs
```

Note: For targets with colons (like `lint:check`), use Syntax 1:

```bash
npx nx run docs:lint:check
npx nx run docs:lint:fix
```

### Multiple Project Commands

Use `run-many` to execute a target across multiple projects ([docs](https://nx.dev/nx-api/nx/documents/run-many)):

```bash
# Run target on specific projects
npx nx run-many -t build -p docs,core,utils

# Run target on all projects that have it
npx nx run-many -t build --all

# Run multiple targets
npx nx run-many -t lint:check,test --all

# Run targets in parallel (default is 3)
npx nx run-many -t build --all --parallel=5
```

### Workspace-Level Commands

These commands operate on the workspace root:

```bash
# Format checking and fixing
npx nx format:check
npx nx format:write

# Workspace-level linting
npx nx run romcal:lint:check
npx nx run romcal:lint:fix

# Pre-commit hooks
npx nx run romcal:lint-staged
```

## Common Workflows

### Development Workflow

```bash
# Start the docs development server
npx nx run docs:dev

# Run tests in watch mode during development
npx nx run docs:test:watch
```

### Before Committing

```bash
# Check formatting
npx nx format:check

# Fix formatting issues
npx nx format:write

# Check linting
npx nx run-many -t lint:check --all

# Fix linting issues
npx nx run-many -t lint:fix --all

# Run all tests
npx nx run-many -t test --all
```

### Building for Production

```bash
# Build a specific project
npx nx run docs:build

# Build all projects
npx nx run-many -t build --all
```

### Documentation-Specific Tasks

```bash
# Check for broken links
npx nx run docs:check-links

# Sort glossary entries
npx nx run docs:sort-glossary

# Generate version constants
npx nx run docs:generate-version
```

## Dependency Graph

Visualize and explore your workspace structure with `nx graph` ([docs](https://nx.dev/nx-api/nx/documents/graph)):

```bash
# Open interactive graph in browser
npx nx graph

# Generate a static HTML file
npx nx graph --file=output.html

# Focus on specific projects
npx nx graph --focus=docs

# Show only affected projects
npx nx graph --affected

# Watch mode for file changes
npx nx graph --watch
```

## Exploring Projects

Use `nx show` to explore project details ([docs](https://nx.dev/nx-api/nx/documents/show)):

```bash
# Show all projects in the workspace
npx nx show projects

# Show projects with a specific target
npx nx show projects --with-target build
npx nx show projects --with-target test

# Show details for a specific project
npx nx show project docs

# Show detailed project configuration
npx nx show project docs --json

# Show projects affected by current changes
npx nx show projects --affected
```

## Affected Commands

Run commands only on projects affected by your changes with `nx affected` ([docs](https://nx.dev/nx-api/nx/documents/affected)):

```bash
# Test affected projects
npx nx affected -t test

# Build affected projects
npx nx affected -t build

# Lint affected projects
npx nx affected -t lint:check

# Run multiple targets on affected projects
npx nx affected -t lint:check,test,build
```

## Caching

Nx automatically caches task results ([docs](https://nx.dev/reference/core-api/nx/documents/reset)). To skip the cache:

```bash
# Skip cache for a specific run
npx nx run docs:build --skipNxCache

# Clear the entire cache
npx nx reset
```

## Configuration Files

- **`nx.json`** - Workspace configuration and default settings
- **`project.json`** - Project-specific configuration (in each project folder)
- **`tsconfig.base.json`** - Base TypeScript paths and compiler options
- **`.eslintrc.json`** - ESLint configuration
- **`.prettierrc`** - Prettier configuration

## Tips and Best Practices

1. **Always use `npx nx`** instead of global `nx` to ensure version consistency
2. **Use `run-many`** for operations across multiple projects
3. **Leverage caching** - Nx automatically caches build and test results
4. **Check affected** - Use `nx affected` to run commands only on changed projects
5. **Format before commit** - Run `npx nx format:write` to ensure consistent formatting
6. **Use workspace generators** - Create new projects with `npx nx g @nx/...`

## Getting Help

```bash
# List all available targets for a project
npx nx show project docs

# Get help for Nx CLI
npx nx --help

# Get help for a specific command
npx nx run --help
npx nx run-many --help
```

## Troubleshooting

### Command not working?

1. Ensure you're using `npx nx` not just `nx`
2. Check if the target exists: `npx nx show project <project-name>`
3. Clear cache if needed: `npx nx reset`

### Build or test failing?

1. Check for formatting issues: `npx nx format:check`
2. Check for linting issues: `npx nx run-many -t lint:check --all`
3. Clear cache and retry: `npx nx reset`

### Need to see what Nx is doing?

Add `--verbose` flag to any command:

```bash
npx nx run docs:build --verbose
```
