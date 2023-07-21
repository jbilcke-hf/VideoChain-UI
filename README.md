---
title: VideoChain-UI
emoji: 🎬🔗
colorFrom: "#1a1b1c"
colorTo: "#acb1b5"
sdk: docker
pinned: false
app_port: 3000
---

This is the frontend interface to VideoChain-API, a server to generate videos using AI.

This space cannot be easily duplicated yet, as you will have to configure a lot of things
to make it work (you need the API, you need separate spaces for upscaling, interpolation etc)
## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Things to know

Next will cache the API calls!
So be careful about this (this is why we invalidate them in the fetch() method)

## Environment variable

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
VC_VIDEOCHAIN_API_URL=http://localhost:7860
VC_SECRET_ACCESS_TOKEN=***SECRENT***
```