#!/bin/bash

# GitHub Deployment Script for Singapore Tuition Finder
# This script will help you deploy your project to GitHub Pages

echo "🚀 Starting GitHub Deployment Process"
echo "====================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project directory."
    exit 1
fi

echo "✅ Found project files"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Singapore Enrichment Tuition Finder"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check current remotes
echo "📋 Current git remotes:"
git remote -v

# Prompt for GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Create repository using GitHub API
echo "🔧 Creating GitHub repository..."
REPO_NAME="singapore-tuition-finder"
DESCRIPTION="Singapore Enrichment Tuition Finder - Web application with multi-location support"

# This will prompt for password/token
curl -u "$GITHUB_USERNAME" https://api.github.com/user/repos -d '{
    "name": "'$REPO_NAME'",
    "description": "'$DESCRIPTION'",
    "private": false,
    "auto_init": false
}' > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Repository created successfully"
else
    echo "⚠️  Repository may already exist or authentication failed"
fi

# Add remote origin
echo "🔗 Setting up remote repository..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" 2>/dev/null || true
git branch -M main

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed successfully!"
    echo ""
    echo "🎉 Next steps to enable GitHub Pages:"
    echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
    echo "2. Under 'Source', select 'Deploy from a branch'"
    echo "3. Select 'main' branch and '/ (root)' folder"
    echo "4. Click 'Save'"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
else
    echo "❌ Failed to push to GitHub"
    echo "Please check your credentials and try again"
fi