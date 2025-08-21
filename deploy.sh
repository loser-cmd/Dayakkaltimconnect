#!/bin/bash
# ==========================
# Script otomatis deploy ke GitHub
# ==========================

# Nama repo GitHub
REPO_URL="https://github.com/loser-cmd/Dayakkaltimconnect.git"
BRANCH="main"

# Step 1: inisialisasi git (kalau belum ada)
if [ ! -d .git ]; then
  git init
  git branch -M $BRANCH
  git remote add origin $REPO_URL
fi

# Step 2: add, commit, push
git add .
git commit -m "auto deploy at $(date '+%Y-%m-%d %H:%M:%S')"
git push -u origin $BRANCH
