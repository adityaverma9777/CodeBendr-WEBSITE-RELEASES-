# Contact Form Email Configuration Setup

## Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Scroll down to **App passwords** or visit: https://myaccount.google.com/apppasswords
4. Select app: "Mail" and device: "Other (custom name)"
5. Name it: "CodeBendr Website"
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 2: Local Development Setup

1. Open the `.env` file in the root directory
2. Add the app password:
   ```
   EMAIL_APP_PASSWORD=abcdefghijklmnop
   ```
   (Remove spaces from the generated password)

3. Save the file

## Step 3: Vercel Deployment Setup

1. Push your code to GitHub (make sure `.env` is in `.gitignore`)

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Import your repository

4. Before deploying, add the environment variable:
   - Go to **Settings** → **Environment Variables**
   - Add variable:
     - Name: `EMAIL_APP_PASSWORD`
     - Value: (your 16-character app password without spaces)
   - Click **Save**

5. Deploy the project

## How It Works

- **Sender Email**: supercellatcoc@gmail.com (hardcoded)
- **Recipients**: 
  - adityaverma9777@gmail.com
  - saumyachaudhary051002@gmail.com
- **API Endpoint**: `/api/contact` (Vercel Serverless Function)

## Testing Locally

The form won't work in local development (http://localhost:5173) because Vercel serverless functions only work when deployed. To test:

1. Deploy to Vercel
2. Test on the deployed URL

OR

Use Vercel CLI for local testing:
```bash
npm install -g vercel
vercel dev
```

## Troubleshooting

### "Failed to send email"
- Check if the app password is correct
- Make sure 2-Step Verification is enabled on the Gmail account
- Verify the environment variable is set in Vercel

### Form not submitting
- Check browser console for errors
- Verify the `/api/contact` endpoint is accessible
- Make sure `nodemailer` is installed

## Security Notes

- ✅ Email password is stored in environment variables (secure)
- ✅ `.env` file is gitignored (not committed to repository)
- ✅ Serverless function runs on backend (credentials never exposed to frontend)
- ✅ Only POST requests are allowed to the API endpoint
