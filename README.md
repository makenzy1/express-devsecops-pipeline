# Project 2 — CI/CD & DevSecOps Pipeline (Docker Hub + Azure Web App)

A production-style sample with:
- Node.js Express API + Jest + Supertest + ESLint + Prettier
- Dockerfile + .dockerignore
- GitHub Actions:
  - **CI** (`.github/workflows/ci.yml`): lint, tests, cache deps, build Docker image, upload image artifact
  - **Trivy** (`trivy.yml`): scan built image, fail on HIGH/CRITICAL
  - **CodeQL** (`codeql.yml`): SAST for JavaScript
  - **Gitleaks** (`gitleaks.yml`): PR-time secret scanning
  - **CD Staging** (`cd-staging.yml`): Azure login, push to Docker Hub, deploy to staging Web App
  - **CD Production** (`cd-prod.yml`): manual promotion with environment `production`
  - **Reusable Deploy** (`_reusable-deploy.yml`): template for other repos

## Required Secrets (GitHub → Settings → Secrets and variables → Actions)
- `AZURE_CREDENTIALS` — Service Principal JSON (Contributor on the Web App)
- `DOCKERHUB_USERNAME` — Docker Hub username
- `DOCKERHUB_TOKEN` — Docker Hub Personal Access Token
- `WEBAPP_NAME_STAGING` — Azure Web App (staging) name
- `WEBAPP_NAME_PROD` — Azure Web App (prod) name
- `AZURE_RESOURCE_GROUP` — Azure Resource Group name

## Quick Start
1. Create a GitHub repo and upload all files.
2. Add the secrets above.
3. Commit to `main`:
   - CI builds + uploads image artifact.
   - Trivy runs after CI completes.
   - CD Staging builds, pushes to Docker Hub, and deploys to your staging Web App.
4. Promote to production:
   - Run **CD - Production** workflow with the image SHA from the staging run.
   - (Optional) Protect the `production` environment in GitHub with approvers.

## Local Dev
```bash
npm ci
npm run dev
curl http://localhost:3000/health
```

## Notes
- Adjust Trivy severity thresholds or CodeQL schedules per policy.
- To switch to ACR later, replace docker login/push steps and image references.
