module.exports = {
    extends: '@antfu',
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
}
