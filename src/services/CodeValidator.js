// Code Validation Service
export const CodeValidator = {
  generateCode: () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  },

  isCodeExpired: (validityDate) => {
    return new Date() > new Date(validityDate)
  },

  isUsageLimitExceeded: (currentUsage, maxLimit) => {
    return currentUsage >= maxLimit
  },

  validateCodeFormat: (code) => {
    return /^[A-Z0-9]{6,}$/.test(code)
  },

  calculateTimeRemaining: (expiryDate) => {
    const now = new Date()
    const expiry = new Date(expiryDate)
    const diff = expiry - now

    if (diff <= 0) return { expired: true }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    return { expired: false, days, hours, minutes }
  }
}

export default CodeValidator
