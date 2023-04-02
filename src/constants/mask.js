export const normalizePhoneNumber = (value) => {
    if (!value) return ''
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{9})(\d+?)/, '$1')
  }
  
  
export const normalizeCpfNumber = (value) => {
    if (!value) return ''
    return value.replace(/[\D]/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}