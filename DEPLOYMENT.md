# Deployment Guide

CI/CD pipeline that deploys to AWS S3 + CloudFront on every push to `main`.

## How It Works

1. Push to `main` triggers the GitHub Actions workflow
2. GitHub authenticates with AWS using OIDC (no long-lived access keys)
3. Files are synced to S3 (dev/config files excluded)
4. Cache headers are set (long cache for CSS/JS, no-cache for HTML)
5. CloudFront cache is invalidated so changes go live immediately

## Setup

### 1. Create an S3 Bucket

- Create a bucket (e.g. `sentiologic-website`)
- Enable **Static website hosting** under bucket Properties
- Set index document to `index.html`
- Block all public access (CloudFront will serve the content)

### 2. Create a CloudFront Distribution

- Origin: select your S3 bucket
- Origin access: **Origin Access Control (OAC)** — create a new OAC and update the S3 bucket policy as prompted
- Default root object: `index.html`
- Viewer protocol policy: **Redirect HTTP to HTTPS**
- Alternate domain name (CNAME): your domain (e.g. `sentiologic.com`)
- SSL certificate: request one in **ACM** (us-east-1 region) for your domain
- Note down the **Distribution ID**

### 3. Connect Your Namecheap Domain

- In ACM (us-east-1), request a certificate for your domain
- Add the CNAME validation records in Namecheap DNS
- Once validated, attach the certificate to your CloudFront distribution
- In Namecheap DNS, add a CNAME record:
  - Host: `@` (or `www`)
  - Value: your CloudFront distribution domain (e.g. `d1234abcd.cloudfront.net`)
- Note: for apex domain (`sentiologic.com`), Namecheap doesn't support ALIAS records — use a CNAME for `www` and set up a redirect for the apex, or use Namecheap's URL redirect

### 4. Set Up OIDC Authentication (GitHub → AWS)

This avoids storing AWS access keys as secrets. GitHub authenticates via short-lived tokens.

**In AWS IAM:**

1. Go to **IAM → Identity providers → Add provider**
   - Provider type: **OpenID Connect**
   - Provider URL: `https://token.actions.githubusercontent.com`
   - Audience: `sts.amazonaws.com`

2. Go to **IAM → Roles → Create role**
   - Trusted entity: **Web identity**
   - Identity provider: select the one you just created
   - Audience: `sts.amazonaws.com`
   - Name it something like `github-actions-deploy`

3. Edit the role's **Trust policy** to restrict to your repo:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
         },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
           "StringEquals": {
             "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
           },
           "StringLike": {
             "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USER/YOUR_REPO:ref:refs/heads/main"
           }
         }
       }
     ]
   }
   ```
   Replace `YOUR_ACCOUNT_ID`, `YOUR_GITHUB_USER`, and `YOUR_REPO`.

4. Attach an **inline policy** to the role with these permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:DeleteObject",
           "s3:GetObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::YOUR_BUCKET_NAME",
           "arn:aws:s3:::YOUR_BUCKET_NAME/*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": "cloudfront:CreateInvalidation",
         "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
       }
     ]
   }
   ```

5. Copy the role's ARN (e.g. `arn:aws:iam::123456789:role/github-actions-deploy`)

### 5. Configure GitHub Repository

Go to your repo → **Settings → Secrets and variables → Actions**.

**Secrets** (sensitive):
| Name | Value |
|------|-------|
| `AWS_ROLE_ARN` | The IAM role ARN from step 4 |

**Variables** (non-sensitive):
| Name | Value |
|------|-------|
| `AWS_REGION` | Your S3 bucket region (e.g. `ap-southeast-1`) |
| `S3_BUCKET` | Your bucket name (e.g. `sentiologic-website`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Your distribution ID (e.g. `E1A2B3C4D5E6F7`) |

## Testing

After setup, push any change to `main` and check the **Actions** tab in GitHub to see the deployment run.
