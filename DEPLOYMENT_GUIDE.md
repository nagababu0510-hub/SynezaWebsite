# Syneza Technologies — Production Deployment Guide

This guide describes how to build, verify, deploy, and maintain the Syneza Technologies web platform across standard production environments.

---

## 1. Production Build Process

### Build Commands
Execute the following commands from the project root:

```bash
# 1. Clean previous build artifacts
rm -rf dist/

# 2. Run test suites to ensure zero regressions
npm test

# 3. Compile TypeScript and build production assets
npm run build
```

### Build Artifacts
The build produces a self-contained static directory at `dist/`:
- `dist/index.html`: Optimized HTML entry point with `<noscript>` fallback and meta headers.
- `dist/assets/`: Minified, hashed JavaScript chunks and Tailwind CSS stylesheets.
- `dist/config/`: All validated JSON configuration files.
- `dist/favicon.svg`, `dist/robots.txt`, `dist/sitemap.xml`: Static assets and SEO crawl directives.

---

## 2. Hosting Options & Deployment Steps

Because the website builds to static HTML/CSS/JS with runtime JSON configuration, it can be hosted inexpensively with high performance, edge caching, and 99.99% availability.

### Option A: Cloudflare Pages (Recommended)
1. Link your Git repository in the Cloudflare dashboard.
2. Configure build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` (Set environment variable `NODE_VERSION=20`)
3. Single Page Application (SPA) Routing:
   Add a `_routes.json` or `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```
4. Deploy. Cloudflare automatically provisions free SSL/TLS certificates and distributes assets across global edge nodes.

---

### Option B: Vercel / Netlify
1. Import repository into Vercel or Netlify.
2. Set build command: `npm run build`.
3. Set output directory: `dist`.
4. SPA Redirects (Netlify `public/_redirects`):
   ```
   /*    /index.html   200
   ```
5. Deploy.

---

### Option C: AWS S3 + CloudFront CDN
1. Create an S3 bucket with static website hosting enabled.
2. Upload the contents of `dist/` to the S3 bucket:
   ```bash
   aws s3 sync dist/ s3://syneza-website-bucket --delete
   ```
3. Configure a CloudFront distribution pointing to the S3 origin.
4. Set **Custom Error Response**:
   - HTTP Error Code: `404`
   - Response Page Path: `/index.html`
   - HTTP Response Code: `200`
5. Associate an ACM SSL/TLS certificate with your custom domain (`syneza.com`).

---

### Option D: Docker Container with Nginx
For organizations requiring on-premise or sovereign container hosting, a production `Dockerfile` is provided below:

```dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Nginx serving stage
FROM nginx:alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

`nginx.conf` for SPA routing:
```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        root /usr/share/nginx/html;
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Disable cache for JSON configurations to allow runtime updates
    location /config/ {
        root /usr/share/nginx/html;
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }
}
```

---

## 3. Domain & DNS Configuration

1. Point your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare DNS) to your host:
   - Apex domain (`syneza.com`): `A` or `ALIAS` record pointing to host IP / CDN endpoint.
   - Subdomain (`www.syneza.com`): `CNAME` record pointing to `syneza.com`.
2. Configure HTTP-to-HTTPS automatic redirection.
3. Enable HTTP/2 or HTTP/3 at the edge CDN layer.

---

## 4. Contact Form Activation & Backend Integration

By default, the contact form safely validates user inputs and confirms submission with a reference receipt. To connect a live email notification or CRM persistence pipeline:

1. Deploy a secure REST API endpoint (e.g. Spring Boot REST service, AWS Lambda, or Cloudflare Worker).
2. Set the environment variable in your production build:
   ```env
   VITE_CONTACT_API_URL=https://api.syneza.com/api/v1/inquiries
   ```
3. Ensure CORS is configured on the backend to allow requests only from `https://syneza.com`.

---

## 5. Rollback & Disaster Recovery

- **Instant Rollback via Git / CDN**: On Cloudflare Pages, Vercel, or Netlify, you can roll back to any previous deployment with a single click in the dashboard.
- **S3 / Container Rollback**: Maintain previous versioned releases or tag Docker images (`syneza-website:v1.0.0`). Revert traffic by pointing the CDN or load balancer to the previous container image.
