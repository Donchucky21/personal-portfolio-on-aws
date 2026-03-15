# Personal Portfolio Website on AWS

This project is my personal portfolio website built as a static and responsive web application to showcase my experience, technical skills, services, and contact information as a Cloud and DevOps Engineer.

It was also a practical hands-on deployment project where I implemented secure hosting using AWS and configured custom domain routing with Cloudflare.

## Project Overview

The goal of this project was to build and deploy a professional portfolio website that can be accessed publicly over HTTPS and used to showcase my work to clients, and collaborators.

The website includes:
- About me section
- Skills and technology stack
- Services offered
- Experience highlights
- Contact section for freelance and professional opportunities

## Architecture

The final architecture used for the deployment is:

- Static website files hosted in Amazon S3
- Amazon CloudFront as the content delivery network
- AWS Certificate Manager for SSL/TLS certificate provisioning
- Cloudflare for DNS management and domain routing

## Why CloudFront Was Used

Although Amazon S3 can host static websites, the S3 website endpoint only supports HTTP. That means the site would appear as **Not secure** in the browser.

To solve this, I placed CloudFront in front of the S3 bucket and attached an SSL certificate from AWS Certificate Manager. This allowed the website to be served securely over HTTPS.

## Key Features

- Responsive static portfolio website
- Fast content delivery using CloudFront
- HTTPS enabled with ACM
- Custom domain support using Cloudflare DNS
- Clean and professional layout for personal branding
- Suitable for deployment without a backend server

## Technologies Used

- HTML
- CSS
- JavaScript
- Amazon S3
- Amazon CloudFront
- AWS Certificate Manager
- Cloudflare DNS

## Deployment Process

### 1. Build the portfolio site
Created a static website using HTML, CSS, and JavaScript.

### 2. Upload website files to S3
Uploaded the website files into an Amazon S3 bucket configured for static hosting.

### 3. Test the S3 website endpoint
Verified that the website was accessible through the S3 website endpoint.

### 4. Configure CloudFront
Created a CloudFront distribution using the S3 bucket as the origin.

Important settings included:
- Default root object set to `index.html`
- Viewer protocol policy set to `Redirect HTTP to HTTPS`

### 5. Request SSL certificate
Requested a public certificate in AWS Certificate Manager in the `us-east-1` region for the custom domain.

### 6. Validate the domain
Used DNS validation by adding the ACM validation records in Cloudflare.

### 7. Add alternate domain names
Added the custom domain to the CloudFront distribution and attached the ACM certificate.

### 8. Update DNS in Cloudflare
Created DNS records in Cloudflare to point the domain to the CloudFront distribution.

Example:
chukwuka.starttechapp.uk

### 9. Test HTTPS access
Confirmed that the site was accessible securely through the custom domain over HTTPS.

## Challenges I Encountered

During the deployment, I ran into a few real-world configuration issues, including:

- Browser showing **Not secure** when using the S3 website endpoint
- Difficulty locating the **Default root object** setting in CloudFront
- Difficulty locating the **Viewer protocol policy** setting in CloudFront
- Understanding the difference between using the S3 website endpoint and the S3 bucket origin
- Configuring Cloudflare correctly to point the custom domain to CloudFront

These issues helped strengthen my understanding of how AWS static hosting, CDN distribution, SSL certificates, and DNS work together.

## Lessons Learned

This project helped me gain practical experience in:

- Hosting static websites on AWS
- Using CloudFront for secure content delivery
- Managing HTTPS for static websites
- Connecting third-party DNS providers like Cloudflare to AWS services
- Troubleshooting deployment and configuration issues in the AWS Console

## Future Improvements

Potential next steps for this project include:
- Adding a contact form backend using AWS Lambda and API Gateway
- Integrating analytics
- Improving SEO and metadata
- Adding a projects section with live demos
- Automating deployment with GitHub Actions

## Outcome

This project gave me a fully deployed personal portfolio site and also served as a practical cloud deployment exercise that reflects real-world hosting and troubleshooting workflows.

## Author

**Chukwuka Agupugo**  
Cloud and DevOps Engineer  
Freelance technical services available
