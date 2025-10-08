/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Oosby Brand Identity - Core colors
				'oosby-pink': '#f966f2', // Primary brand pink (logo + accents)
				'oosby-pink-func': '#e63ad9', // Functional pink (buttons, primary CTA)
				'oosby-plum': '#4e006b', // Digital plum (text, headings, alt CTA)
				'oosby-teal': '#00e1c6', // Accent teal (icons, hover highlights)
				'oosby-teal-func': '#009c8e', // Functional teal (secondary CTA)
				'oosby-gray': '#f8f2f6', // Warm gray (surfaces, cards)
				'oosby-bg': '#fffafc', // Off-white background
				'oosby-text': '#222222', // Default text

				// Oosby Semantic tokens
				'oosby-surface': '#f8f2f6',
				'oosby-surface-2': '#ffffff',
				'oosby-border': '#e9e1ec',
				'oosby-text-muted': '#5a5a66',
				'oosby-focus': '#7fd8ff',
				'oosby-success': '#1aa579',
				'oosby-warning': '#ffb020',
				'oosby-danger': '#ff5470',
				'oosby-card-hover': '#f3ecf5',

				// Marketing-specific semantic colors
				success: {
					50: '#f0fdf4',
					500: '#22c55e',
					600: '#16a34a',
				},
				warning: {
					50: '#fffbeb',
					500: '#f59e0b',
					600: '#d97706',
				},
				error: {
					50: '#fef2f2',
					500: '#ef4444',
					600: '#dc2626',
				}
			},
			textColor: {
				DEFAULT: '#222222',
				muted: '#4e006b',
				accent: '#e63ad9'
			},
			backgroundColor: {
				DEFAULT: '#fffafc',
				subtle: '#f8f2f6',
				accent: '#e63ad9',
				plum: '#4e006b',
				teal: '#009c8e'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Nunito', 'Inter', 'system-ui', 'sans-serif'], // For headings/titles
				'display-tight': ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'], // For large display numbers
				mono: ['JetBrains Mono', 'monospace']
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1rem' }],
				sm: ['0.875rem', { lineHeight: '1.25rem' }],
				base: ['1rem', { lineHeight: '1.5rem' }],
				lg: ['1.125rem', { lineHeight: '1.75rem' }],
				xl: ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			spacing: {
				18: '4.5rem',
				88: '22rem',
				128: '32rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			}
		}
	},
	plugins: []
};