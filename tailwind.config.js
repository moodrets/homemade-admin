export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                base: 'Lora, sans-serif',
            },
            boxShadow: {
                square: '8px 8px 0 0 rgba(44,44,44,.2)',
                'square-hover': '11px 11px 0 0 rgba(44,44,44,.2)',
            },
            colors: {
                brand: '#e8eadf',
                neutral: '#f2f2f2',
                secondary: '#e4e9ea',
            },
        },
    },
    plugins: [],
}
