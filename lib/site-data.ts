/**
 * Central place for editable placeholder content.
 * Replace these values with real Motel Minden details when available.
 */

export const motel = {
  name: 'Motel Minden',
  // TODO: Replace with the real street address.
  address: {
    line1: '[123 Street Name]',
    line2: 'Minden, ON [K0M 0A0]',
    country: 'Canada',
  },
  // TODO: Replace with the real phone number.
  phone: '(705) 000-0000',
  // TODO: Replace with the real email address.
  email: 'stay@motelminden.ca',
  // Used for the map + directions links. Update the query to the exact address.
  mapsQuery: 'Minden, Ontario, Canada',
  phoneHours: 'Daily, 8:00 AM – 9:00 PM (ET)',
} as const

export const fullAddress = `${motel.address.line1}, ${motel.address.line2}, ${motel.address.country}`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  motel.mapsQuery,
)}&output=embed`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Accommodations', href: '#accommodations' },
  { label: 'Explore Minden', href: '#explore' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
] as const
