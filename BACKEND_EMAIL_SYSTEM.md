# Backend Email System - Send Emails Without External Services

A custom-built email system that sends contact form submissions directly to Gmail using SMTP, without relying on third-party services like EmailJS, SendGrid, or Mailgun.

## 🎯 What This Solves

**Problem**: Most contact forms require external services to send emails
**Solution**: Built our own email system using Gmail SMTP
**Result**: Direct email delivery to your inbox with full control

## 🛠️ Technologies Used

### Core Libraries
- **Express.js** - Web server framework
- **Nodemailer** - Email sending library
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Email System
- **Gmail SMTP** - Direct email delivery
- **HTML Email Templates** - Professional formatting
- **Error Handling** - User feedback and validation

## 📁 Backend Files

```
my-portfolio/
├── server.js                    # Express.js server
├── api/contact.js               # Vercel serverless function
├── .env                         # Email credentials
└── package.json                 # Dependencies
```

## ⚙️ Setup Instructions

### 1. Install Dependencies
```bash
npm install express nodemailer cors dotenv
```

### 2. Gmail App Password Setup
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account Settings → Security
3. Generate an App Password for "Mail"
4. Use this password in your `.env` file

### 3. Environment Variables
Create `.env` file:
```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME=Your Name
```

## 🔧 How It Works

### 1. SMTP Connection
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```

### 2. Email Template
```javascript
const mailOptions = {
  from: { name: 'Your Name', address: 'your-email@gmail.com' },
  to: 'your-email@gmail.com',
  subject: `Portfolio Contact: ${subject}`,
  html: `Professional HTML email template...`,
  text: `Plain text version...`
};
```

### 3. Send Email
```javascript
const info = await transporter.sendMail(mailOptions);
console.log('Email sent:', info.messageId);
```

## 🚀 API Endpoint

### POST `/api/contact`
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "messageId": "unique-email-id"
}
```

## 📧 Email Features

- **Professional HTML formatting** with custom styling
- **Responsive design** that works on all devices
- **Complete form data** including sender details
- **Error handling** with user-friendly messages
- **Direct Gmail delivery** (no spam folder issues)

## 🔒 Security Features

- Environment variables for sensitive data
- Input validation and sanitization
- CORS protection
- Error handling without exposing sensitive information
- Secure SMTP authentication

## 🎯 Why This Approach?

### Traditional Way (External Services)
- ❌ Monthly fees ($10-50/month)
- ❌ Rate limits and quotas
- ❌ Dependency on third-party services
- ❌ Limited customization
- ❌ Data goes through their servers

### Our Custom Solution
- ✅ **Zero cost** - Uses your Gmail account
- ✅ **No rate limits** - Gmail's generous limits
- ✅ **Full control** - Customize everything
- ✅ **No dependencies** - Self-contained system
- ✅ **Direct delivery** - Straight to your inbox

## 🚀 Deployment Options

### Option 1: Vercel (Serverless)
- Deploy `api/contact.js` as serverless function
- Automatic scaling and HTTPS
- Free tier available

### Option 2: Railway/Render (Full Server)
- Deploy `server.js` as Express app
- Always-on server
- More control over configuration

## 📊 Performance

- **Fast email delivery** via Gmail SMTP
- **Reliable delivery** to inbox (not spam)
- **Professional formatting** with HTML templates
- **Error handling** with proper user feedback

## 🎉 What Makes This Special

**Most developers use paid services:**
- EmailJS ($15/month)
- SendGrid ($15/month)
- Mailgun ($35/month)
- Formspree ($20/month)

**This solution:**
- **$0/month** - Uses your existing Gmail
- **Full control** - Customize email templates
- **No limits** - Gmail's generous quotas
- **Professional** - Production-ready code
- **Scalable** - Handles high volume

## 🔧 Technical Details

### SMTP Configuration
- **Host**: smtp.gmail.com
- **Port**: 465 (SSL) or 587 (TLS)
- **Authentication**: App Password (not regular password)
- **Security**: SSL/TLS encryption

### Email Formatting
- **HTML**: Professional styling with CSS
- **Text**: Plain text fallback
- **Responsive**: Works on all devices
- **Branded**: Custom colors and styling

### Error Handling
- **Validation**: Required field checking
- **SMTP Errors**: Connection and sending errors
- **User Feedback**: Success/error messages
- **Logging**: Console output for debugging

## 🎯 Use Cases

- Portfolio contact forms
- Business inquiry forms
- Lead generation forms
- Customer support forms
- Any website needing email functionality

---

**Built with ❤️ using Gmail SMTP and Node.js**
