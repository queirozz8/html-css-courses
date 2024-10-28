/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: '#4CB5F9', // Cor do botão de enviar
        face: '#385185', // Cor do texto do "Entrar com o Facebook"
        darkBlue: '#00376B', // Cor do "Esqueceu a senha?"
        lightBlue: '#0095F6', // Cor do "Cadastre-se"
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
