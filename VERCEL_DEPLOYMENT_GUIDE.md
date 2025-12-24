# Vercel Deployment Guide for CodeBendr Website

## ✅ Changes Pushed to GitHub

All your changes have been committed and pushed to GitHub, including:
- ✨ Glassmorphism contributor cards
- 🎨 Custom Publica Play font
- 🌈 Subtle gradient backgrounds
- 📧 Contact form with email functionality
- 🖼️ High-quality icon images replacing emojis

**Note:** The `.env` file with your password is **NOT** included in Git (it's in `.gitignore` for security).

---

## 🚀 Deploy to Vercel - Step by Step

### Step 1: Go to Vercel
1. Open your browser and go to: [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** for easy integration

### Step 2: Import Your Project
1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"CodeBendr-WEBSITE-RELEASES-"** (or whatever your repo is named)
4. Click **"Import"** next to it

### Step 3: Configure Project Settings
Vercel will show you the project configuration page:

**Framework Preset:** 
- Should auto-detect as **"Vite"** ✅

**Root Directory:**
- Leave as **"./"** (default) ✅

**Build Command:**
- Should be: `npm run build` ✅

**Output Directory:**
- Should be: `dist` ✅

**Install Command:**
- Should be: `npm install` ✅

### Step 4: Add Environment Variable (MOST IMPORTANT!)
Before clicking "Deploy", you MUST add the email password:

1. Click **"Environment Variables"** section (expand it)
2. Add the following:
   - **Key:** `EMAIL_APP_PASSWORD`
   - **Value:** `[paste your Gmail app password here]`
     (The 16-character password from the Gmail account `supercellatcoc@gmail.com`)
3. Leave it as **"Production"** environment
4. Click **"Add"**

### Step 5: Deploy!
1. Click the **"Deploy"** button
2. Wait 1-2 minutes while Vercel builds and deploys
3. You'll see a success screen with your live URL!

---

## 📋 After Deployment

### Test the Contact Form
1. Visit your live Vercel URL (e.g., `your-project.vercel.app`)
2. Go to the **Contributors** page
3. Scroll to **"Want to Contribute?"** section
4. Fill out the contact form and click **"Send Message"**
5. Check these two email inboxes for the message:
   - `adityaverma9777@gmail.com`
   - `saumyachaudhary051002@gmail.com`

### If Email Doesn't Work
Check these things:

1. **Environment Variable:**
   - Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
   - Make sure `EMAIL_APP_PASSWORD` is there
   - If you need to update it, add the new value and **redeploy**

2. **Gmail App Password:**
   - Make sure 2-Step Verification is enabled on `supercellatcoc@gmail.com`
   - Generate a new App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Update it in Vercel environment variables

3. **Redeploy:**
   - Go to **Deployments** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**

---

## 🔗 Your Vercel Dashboard URLs

- **Project Dashboard:** `https://vercel.com/dashboard`
- **Your Projects:** Click on "CodeBendr" project to see deployments
- **Settings:** `Settings` tab for environment variables
- **Deployments:** `Deployments` tab to see all versions

---

## 💡 Pro Tips

1. **Custom Domain:** 
   - You can add a custom domain in Settings → Domains
   - E.g., `codebendr.com` instead of `codebendr.vercel.app`

2. **Automatic Deployments:**
   - Every time you push to GitHub, Vercel auto-deploys ✨
   - No need to manually deploy again!

3. **Preview Deployments:**
   - Vercel creates preview URLs for pull requests
   - Test changes before merging to main

---

## ⚠️ Important Security Notes

- ✅ `.env` file is **NOT** pushed to GitHub (protected by `.gitignore`)
- ✅ Email password is stored securely in Vercel environment variables
- ✅ Never share your `EMAIL_APP_PASSWORD` publicly
- ✅ The serverless function keeps credentials secure on the backend

---

## Need Help?

If you encounter any issues:
1. Check the Vercel deployment logs (click on the deployment → View Function Logs)
2. Make sure the environment variable is set correctly
3. Verify the Gmail app password is valid
4. Check that the email addresses in `api/contact.js` are correct

Good luck with your deployment! 🚀
