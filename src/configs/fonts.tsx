import { Global } from '@mantine/core';
import bold from '@/fonts/Inter-Bold.woff2';
import regular from '@/fonts/Inter-Regular.woff2';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
