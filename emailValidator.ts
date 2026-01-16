export function validateEmail(email: string): boolean {

    if (email.includes(' ')) {
        return false;
    }
    
    if (!email.includes('@')) {
        return false;
    }

    const parts = email.split('@');
    const domain = parts[parts.length - 1];

    if (!domain.includes('.')) {
        return false;
    }

    if (domain.endsWith('.')) {
        return false;
    }


    
    return true;
}