# CLAUDE.md - General Instructions for romcal Repository

## Project Overview

romcal is a library for generating Roman Catholic calendar data for both the General Roman Calendar and particular calendars, primarily used for creating liturgical calendars (ordos) with celebrations assigned to specific days.

## Development Guidelines

### Git Workflow

- All changes must be submitted via Pull Request from a repository fork
- Target branch for PRs (and branch used to publish `dev` releases to NPM): `dev`
- Stable branch (and branch used to publish `latest` and non-prerelease releases to NPM): `master`
- Never commit directly to any branches in this repository

### Code Style

- Follow existing code conventions in the repository
- Use TypeScript for all code
- Maintain consistent formatting and naming conventions
- Follow Conventional Commit format for commit messages
- Use Markdown in prose, code comments, TSDocs, documentation

### Documentation and Naming Conventions

- Never add trailing slash to folder names in documentation
- Always format file/folder names and app/NPM package names (e.g. `@romcal/*`) as code using backticks
- Never append Claude Code attribution to commit messages or PR descriptions
- Use commitlint types correctly according to `.commitlintrc.ts`:
  - `feat`/`enh`/`fix`/`refactor`/`perf`/`test` are for source code changes (require scopes)
  - `chore`/`ci`/`build`/`docs`/`style` are for infrastructure/tooling (no scopes required)
  - Example: Use `chore:` for Nx workspace setup, not `feat:`

### Testing

- All new features/fixes/changes must include unit tests
- Run tests before submitting PRs
- Ensure all tests pass before marking tasks as complete

### Documentation

- Update relevant documentation when making changes
- Use TSDoc comments for TypeScript code
- Keep documentation concise and clear
- Use US English as the default language for all documentation, code comments, and TSDoc

## Build and Development Commands

- Check `package.json` for available scripts
- Run linting and type checking before submitting code
- Verify builds are successful

## Important Notes

- This is a liturgical calendar library—maintain respect for religious content
- Ensure accuracy when dealing with liturgical dates and celebrations
- Consider international usage and localization needs
