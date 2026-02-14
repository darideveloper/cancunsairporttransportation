---
name: OpenSpec Archiver
description: Archive an OpenSpec change and commit the results following strict project conventions, ensuring no unrelated files or proposals are included.
---

# OpenSpec Archiver

This skill automates the process of archiving a completed OpenSpec change and strictly following the project's commit message conventions.

## Prerequisites

- Ensure you have identified the OpenSpec change ID that acts as the source of truth for the work (e.g., `openspec list`).

## Workflow Steps

### 1. Run the Archive Workflow
Execute the steps defined in the project's archive workflow.
**Reference Workflow:** `.agent/workflows/openspec-archive.md`

1.  Identify and validate the change ID.
2.  Run `openspec archive <id> --yes`.
3.  Validate the operation using `openspec validate --strict`.

### 2. Stage Changes
**CRITICAL:** strictly avoid adding unrelated files. specifically ensure no *other* OpenSpec proposals (created by parallel agents/processes) are included.

1.  **Stage OpenSpec Updates (Narrowly Scoped)**:
    - Add the updated spec definitions.
      ```bash
      git add openspec/*.yaml
      ```
    - Add the archived change file (it has been moved to the archive folder).
      ```bash
      git add openspec/changes/archive/
      ```
    - Stage the *deletion* of the original change file (target the specific ID to avoid capturing other modifications).
      ```bash
      git add openspec/changes/<id>.yaml
      ```
      *(Note: If the file is already gone, this commands git to record the deletion).*

2.  **Stage Code Modifications**:
    - Stage updates to tracked source files.
      ```bash
      git add -u src/
      ```
      *(Adjust the path if files were modified outside `src/`, e.g., `public/` or root config files, but be specific).*

3.  **Stage New Feature Files**:
    - Check for untracked files specifically related to this feature.
      ```bash
      git status
      ```
    - Add them individually.
      ```bash
      git add path/to/new/file
      ```

   **DO NOT** run `git add .` or global `git add -u`.

### 3. Commit Changes
Create a git commit using the **Conventional Commits** pattern.

**Pattern:**
`<type> (<scope>): <description>`

**Rules:**
1.  **Type**: Must be one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
    - Use `feat` for new features.
    - Use `fix` for bug fixes.
    - Use `chore` for maintenance or OpenSpec operations.
2.  **Scope**: The section of the codebase affected (e.g., `booking`, `ui`).
3.  **Description**: A short, imperative summary (lowercase, no period at end).

**Source of Truth:**
Derive the `type`, `scope`, and `description` from the OpenSpec change title or summary if not explicitly provided by the user.

**Command:**
```bash
git commit -m "<type> (<scope>): <description>"
```

### 4. Verify
Ensure the commit was successful and clean.
