export function validateEmail(email: string): boolean {
  if (email.includes(' ')) {
    return false;
  }

  if (!email.includes('@')) {
    return false;
  }

  const parts = email.split('@');
  const domain = parts[parts.length - 1];
  const localPart = parts[0];

  if (localPart.length === 0 || domain.length === 0) {
    return false;
  }

  if (!domain.includes('.')) {
    return false;
  }

  if (domain.endsWith('.')) {
    return false;
  }

  return true;
}
