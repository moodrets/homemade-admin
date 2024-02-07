export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                base: 'Lora, sans-serif',
            },
            boxShadow: {
                button: '8px 8px 0 0 rgba(44,44,44,.2)',
                'button-hover': '11px 11px 0 0 rgba(44,44,44,.2)',
            },
        },
    },
    plugins: [],
}
