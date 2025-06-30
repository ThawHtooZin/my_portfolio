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
4. Connect your Gmail account (thawhtoozin@gmail.com)
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

### 5. Update the Code
Replace the placeholders in `src/components/contact.jsx`:

```javascript
// Line 15: Replace 'YOUR_PUBLIC_KEY'
emailjs.init('YOUR_PUBLIC_KEY')

// Line 47: Replace 'YOUR_SERVICE_ID'
'YOUR_SERVICE_ID'

// Line 48: Replace 'YOUR_TEMPLATE_ID'
'YOUR_TEMPLATE_ID'
```

## Example with Real Values:
```javascript
emailjs.init('user_abc123def456')
// ...
const result = await emailjs.send(
  'service_xyz789', 
  'template_abc123',
  templateParams
)
```

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