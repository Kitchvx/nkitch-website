## Nathan Kitching's Website

This is my own Portfolio Project created with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First Clone the repo:

```
git clone https://github.com/Kitchvx/nkitch-website.git
```

cd into it and install dependencies:
```bash
npm install
```

cd into it and edit `next.confiig.mjs` and comment out `output: 'export',`:
```
/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
};

export default nextConfig;
```

Save and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the `app/page.js` and the jsx components `app/components/`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deployment

For deloying this project I have used [Hostinger](https://hostinger.co.uk?REFERRALCODE=1NATHAN23). Or you can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), Docs can be found [here](https://nextjs.org/docs/deployment) for more details.
