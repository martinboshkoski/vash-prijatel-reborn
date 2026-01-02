#!/bin/bash

# Quick script to edit blog posts
BLOG_FILE="src/data/blogPosts.ts"

echo "📝 Opening blog posts file..."
echo "File: $BLOG_FILE"
echo ""
echo "💡 Tips:"
echo "   - See BLOG_POST_TEMPLATE.md for template"
echo "   - Current highest ID: $(grep -o '"id": [0-9]*' $BLOG_FILE | tail -1 | grep -o '[0-9]*')"
echo "   - Next ID should be: $(($(grep -o '"id": [0-9]*' $BLOG_FILE | tail -1 | grep -o '[0-9]*') + 1))"
echo ""

# Try to open with VS Code, otherwise use default editor
if command -v code &> /dev/null; then
    code "$BLOG_FILE"
elif [ -n "$EDITOR" ]; then
    $EDITOR "$BLOG_FILE"
else
    open "$BLOG_FILE"
fi
