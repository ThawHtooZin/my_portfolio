# Email Setup Guide

## Overview
The contact form now uses EmailJS to send emails directly to your Gmail without needing a backend server.

## What You Need to Set Up

### 1. EmailJS Account Setup
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Email Service Configuration
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (thawhtoozin200811@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

### 3. Email Template Setup
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Note down the **Template ID** (e.g., "template_xyz789")

### 4. Get Your Public Key
1. Go to "Account" → "API Keys" in EmailJS dashboard
2. Copy your **Public Key**

### 5. Add keys to `.env`
Create or update `.env` in the project root (Vite reads `VITE_` vars at build time):

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

Restart dev server after changing `.env`. For production, set these **before** running `npm run build`.

### Template variables
The form sends these fields — use the same names in your EmailJS template:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{reply_to}}` (optional — set "Reply-To" in template settings)

## Features Implemented:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Auto-dismiss messages after 5 seconds
- ✅ Disabled button during submission

## Testing:
1. Fill out the contact form
2. Submit and check your Gmail
3. You should receive the email with the form details

## Troubleshooting:
- If emails don't send, check browser console for errors
- Verify all IDs are correct
- Make sure your Gmail account is properly connected in EmailJS
- Check EmailJS dashboard for any service issues 