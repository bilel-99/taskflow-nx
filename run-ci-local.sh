#!/bin/bash

# Script to run all CI workflow jobs locally
set -e

echo "========================================="
echo "Running CI Workflow Jobs Locally"
echo "========================================="
echo ""

# Job 1: Build
echo "========================================="
echo "Job 1: Build Applications"
echo "========================================="
echo ""

echo "Step 1.1: Building libraries..."
npx nx run-many -t build --projects=data-models,ui-components,utils --parallel=3
echo "✓ Libraries built successfully"
echo ""

echo "Step 1.2: Building affected apps..."
npx nx affected -t build --parallel=2
echo "✓ Affected apps built successfully"
echo ""

# Job 2: Lint and Test
echo "========================================="
echo "Job 2: Lint & Test"
echo "========================================="
echo ""

echo "Step 2.1: Linting affected projects..."
npx nx affected -t lint --parallel=3
echo "✓ Linting completed successfully"
echo ""

echo "Step 2.2: Testing affected projects..."
npx nx affected -t test --parallel=3 --coverage
echo "✓ Tests completed successfully"
echo ""

# Job 3: E2E Tests
echo "========================================="
echo "Job 3: E2E Tests"
echo "========================================="
echo ""

echo "Step 3.1: Running E2E tests..."
npx nx affected -t e2e --parallel=2
echo "✓ E2E tests completed successfully"
echo ""

echo "========================================="
echo "✓ All CI jobs completed successfully!"
echo "========================================="
echo ""
echo "Your code is ready to push! 🚀"
