function palindrome(str) {
    // Removemos los caractes especiales del string
    const cleanText = str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '');
    // Con el String ya limpio procedemos a invertir el orden del mismo
    const reverseText = cleanText.split('').reverse().join('');
    // Finalmente comparamos el mismo para verificar si es un palindromo
    return cleanText === reverseText ? true : false
  }
  palindrome("eye");