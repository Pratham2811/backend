






I will explain it from first principles, then give you a mechanical fix, and finally a mental model so you never repeat this.

1. Read the error literally (always do this first)

The first fatal error is this line:

fatal: No url found for submodule path 'Nodejsnetworking/TCP' in .gitmodules


Everything after that is a consequence.

So Git is telling you exactly what is wrong:

“I see something that looks like a submodule, but I cannot find its URL.”

This has nothing to do with GitHub Pages.
This fails even before any build starts.

2. What is a Git submodule (first principles)

A submodule is NOT a folder.

It is:

A pointer to another Git repository

Stored as:

a special entry in the Git index

a .gitmodules file describing where it lives

Conceptually:

Main repo
 ├── .gitmodules
 └── Nodejsnetworking/TCP  ---> points to another repo


Git does not store the files inside a submodule.
It stores:

repo URL

exact commit hash

3. What GitHub Actions is doing

Your log shows:

Fetching submodules
git submodule update --init --recursive


This means:

Git detected a submodule entry

Git tried to fetch it

Git looked into .gitmodules

❌ No URL found → hard failure

CI systems always fetch submodules if they exist.

4. Why this happened (very important)

This happens in exactly one scenario:

You accidentally created a submodule without meaning to

Typical ways this occurs:

Case 1 — Git inside Git

You did this:

backend/
 └── Nodejsnetworking/TCP/
     └── .git/


Then you ran:

git add .


Git sees:

“Oh, this is another repository — I’ll treat it as a submodule.”

Case 2 — Copied a repo into another repo

You:

cloned a repo

moved it inside another repo

committed it

Same result.

Case 3 — Deleted .gitmodules but not the submodule entry

This is exactly what your error shows.

Git remembers the submodule,
but the metadata is broken.

5. Proof that this is your situation

This line confirms it:

submodule path 'Nodejsnetworking/TCP'


That path:

looks like a learning folder

looks like a separate repo

should NOT be a submodule

You never intended it to be one.

6. Why it fails ONLY on GitHub Actions

Locally:

Git may ignore it

You may never run git submodule update

In CI:

GitHub always initializes submodules

Broken submodules = fatal error

This is why CI is strict.

7. Correct fix (choose the right one)

Since you said:

“I am pushing my learning journey”

You do NOT want submodules.

✅ CORRECT FIX: Convert submodule → normal folder

Run these commands exactly from repo root:

# Step 1: Remove submodule reference from git
git rm --cached Nodejsnetworking/TCP

# Step 2: Delete any broken submodule metadata
rm -rf .git/modules/Nodejsnetworking/TCP

# Step 3: Ensure folder is a normal folder
rm -rf Nodejsnetworking/TCP/.git

# Step 4: Re-add folder as normal files
git add Nodejsnetworking/TCP

# Step 5: Commit
git commit -m "Convert TCP learning folder from submodule to normal directory"

# Step 6: Push
git push


This permanently fixes the issue.

8. Alternative (NOT recommended for your case)

If you actually wanted a submodule (you don’t), you would need:

[submodule "Nodejsnetworking/TCP"]
  path = Nodejsnetworking/TCP
  url = https://github.com/username/repo.git


But for a learning repo, this is architectural nonsense.

9. Mental model to remember (this makes you independent)
Rule 1

If a folder contains .git/ → Git treats it as another repo.

Rule 2

Git never allows “nested repositories” by default.
It becomes a submodule.

Rule 3

Submodules require:

.gitmodules

valid URLs

explicit intent

Rule 4

Learning repos should contain:

Markdown

Code

Notes

NOT:

submodules

binaries

giant media files

10. Final diagnosis (plain English)

Your repo contains a broken submodule

CI tries to fetch it

URL is missing

Git exits with code 128

Build never starts

Pages fails

This is 100% deterministic and reproducible.

Final verdict

This is not a GitHub Pages problem.
This is not a CI problem.
This is a Git hygiene problem.

Once you remove the accidental submodule, the pipeline will stop failing.
