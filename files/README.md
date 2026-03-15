# Chukwuka Agupugo Portfolio Website

A static, responsive personal portfolio website built for easy deployment to an Amazon S3 bucket.

## Files included

- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `Chukwuka_Agupugo_Resume.docx`

## What is included

- Modern landing page hero section
- About section
- Services section
- Technical expertise section
- Career timeline and achievements
- Contact section with:
  - email
  - phone
  - GitHub
  - static-friendly contact form that opens the visitor's email app

## Update before publishing

You may want to update these items in `index.html`:

1. Your LinkedIn URL if you want it displayed
2. Any additional freelance services
3. Any project links or portfolio case studies
4. Any updated certification status
5. Your final resume file if you want PDF instead of DOCX

## Deploy to Amazon S3

### Option 1: Static website hosting
1. Create an S3 bucket
2. Upload all files from this folder
3. In bucket properties, enable static website hosting
4. Set `index.html` as the index document
5. Make the files publicly readable, or place CloudFront in front of the bucket for a production setup

### Option 2: S3 + CloudFront
1. Create an S3 bucket and upload all files
2. Create a CloudFront distribution using the bucket as the origin
3. Set `index.html` as the default root object
4. Point your domain to CloudFront
5. Add HTTPS using ACM on CloudFront

## Notes
- The contact form works without a backend by using `mailto:`
- This is suitable for a simple personal portfolio hosted statically
- For a more advanced contact form, you can later connect Formspree, FormSubmit, Netlify Forms, or an AWS serverless backend

## Recommended next improvement ideas

- Add project screenshots
- Add Medium and LinkedIn links
- Add a testimonials section
- Replace the initials badge with a real profile photo
- Add a custom domain and analytics
