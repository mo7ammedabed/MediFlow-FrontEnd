window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A',     // Deep Professional Blue
          primary: '#2563EB',  // Vibrant Blue
          canvas: '#F8FAFC',   // Light Cool Gray
        },
        surface: {
          DEFAULT: '#FFFFFF',
          border: '#E2E8F0',
        },
        semantic: {
          success: {
            text: '#166534',
            bg: '#DCFCE7',
          },
          error: {
            text: '#991B1B',
            bg: '#FEE2E2',
          },
          warning: {
            text: '#854D0E',
            bg: '#FEF9C3',
          },
          info: {
            text: '#1E40AF',
            bg: '#DBEAFE',
          }
        }
      },
      fontSize: {
        'display-kpi': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-bold': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h2-semibold': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm-tabular': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      spacing: {
        'unit': '4px',
        'container-margin': '24px',
        'gutter': '16px',
        'sidebar-expanded': '240px',
        'sidebar-collapsed': '64px',
        'table-row': '40px',
      },
      boxShadow: {
        'popover': '0px 4px 12px rgba(0, 0, 0, 0.05)',
      }
    }
  }
}
