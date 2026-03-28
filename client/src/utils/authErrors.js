/**
 * Maps Clerk error codes/messages to user-friendly text.
 */
export const getErrorMessage = (error) => {
    if (!error || !error.errors || error.errors.length === 0) {
        return "An unexpected error occurred. Please try again.";
    }

    const firstError = error.errors[0];
    const code = firstError.code;
    const message = firstError.message?.toLowerCase() || "";

    // Specific code mappings
    switch (code) {
        case "form_identifier_not_found":
            return "Account not found. Please check your email or sign up.";
        case "form_password_incorrect":
            return "Invalid credentials. Please try again.";
        case "form_param_not_unique":
            return "This email or phone is already registered.";
        case "verification_failed":
            return "The verification code is incorrect. Please check and try again.";
        case "form_code_incorrect":
            return "Invalid OTP. Please check your email and enter the correct code.";
        case "form_param_format_invalid":
            if (message.includes("phone")) return "Enter a valid phone number with country code (e.g., +91).";
            return "One or more fields are incorrectly formatted.";
        case "form_password_pwned":
        case "form_password_length_too_short":
            return "Your password is too weak. Choose a stronger one (min 6 characters).";
        case "session_exists":
            return "You are already signed in. Please refresh the page.";
        default:
            break;
    }

    // Keyword mappings
    if (message.includes("authentication method not enabled")) return "Authentication method not enabled in settings. Please contact support.";
    if (message.includes("identifier")) return "Account does not exist.";
    if (message.includes("password")) return "Invalid credentials.";
    if (message.includes("code")) return "Invalid verification code.";
    if (message.includes("exists")) return "This account already exists. Please login.";
    if (message.includes("phone")) return "Invalid phone number format. Use E.164 format (e.g., +919999999999).";

    return firstError.longMessage || firstError.message || "Something went wrong. Please try again.";
};
