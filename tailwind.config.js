/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",      // يبحث عن الكلاسات في ملف HTML
    "./app.js"           //  <-- !! هذا هو السطر الجديد الذي تم إضافته
    // إذا كان لديك ملفات JS منفصلة تستخدم كلاسات Tailwind، أضفها هنا
    // مثال: "./src/**/*.js"
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class on the <html> tag
  theme: {
    extend: {
       // يمكنك إضافة تخصيصات الألوان والخطوط هنا إذا أردت
       // لكن بما أنك تستخدم متغيرات CSS، قد لا تحتاج للكثير هنا
       colors: {
         // Map your CSS variables here if you want to use Tailwind classes directly for them
         // Example: primary: 'var(--color-primary-DEFAULT)',
         // This is optional if you primarily use CSS variables as you already do
       },
       fontFamily: {
         sans: ['Cairo', 'sans-serif'],
         heading: ['Readex Pro', 'sans-serif'],
       },
        transitionDuration: {
            'fast': '150ms',
            'DEFAULT': '250ms',
            'medium': '350ms',
            'slow': '500ms',
            'xslow': '700ms',
        },
        borderRadius: {
            'DEFAULT': '0.625rem', // 10px
            'lg': '0.75rem',     // 12px
            'xl': '1rem',        // 16px
            '2xl': '1.5rem',     // 24px
            '3xl': '2rem',        // 32px
            'full': '9999px',
        },
    },
  },
  plugins: [],
}