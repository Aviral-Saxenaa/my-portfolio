# 📧 Gmail Setup Instructions for Portfolio Contact Form

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Enable 2-Factor Authentication if not already enabled

## Step 2: Generate App Password
1. Go to **Security** → **2-Step Verification** → **App passwords**
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter "Portfolio Contact Form" as the name
5. Click **Generate**
6. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Update .env File
Open your `.env` file and update these values:

```env
EMAIL_ADDRESS=your-email@gmail.com
GMAIL_PASSKEY=your-16-character-app-password
```

**Example:**
```env
EMAIL_ADDRESS=aviral.saxena@gmail.com
GMAIL_PASSKEY=abcd efgh ijkl mnop
```

## Step 4: Test Configuration
Run the test script to verify everything works:

```bash
node tmp_rovodev_test_gmail.js
```

## Important Notes:
- ✅ Use your **App Password**, NOT your regular Gmail password
- ✅ Remove spaces from the App Password when copying
- ✅ Make sure 2FA is enabled on your Gmail account
- ✅ The email will be sent TO your own email address when someone contacts you

## Troubleshooting:
- **Authentication Error**: Double-check your App Password
- **Connection Error**: Ensure your internet connection is stable
- **Email not received**: Check your spam folder

## Security:
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- App passwords are safer than using your main password