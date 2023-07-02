import { MantineThemeOverride } from '@mantine/core';

const mantineTheme: MantineThemeOverride = {
  other: {
    colors: {
      cactus: ['#00B476'],
      breeze: ['#00C2F5'],
      digitalBlueBonnet: ['#0075DA'],
      sunrise: ['#FFB500'],
      canyon: ['#FF7F39'],
      cardinal: ['#CC004C'],
      violet: ['#6460AA'],
      error: ['#AC0040'],
    },
  },
  components: {
    Input: {
      styles: (theme) => ({
        input: {
          height: '48px',
          border: `1px solid ${theme.other.colors.canyon[0]}`,
          color: theme.other.colors.canyon[0],
          '&:focus': {
            border: `2px solid ${theme.other.colors.digitalBlueBonnet[0]}`,
          },
          '&:hover': {
            cursor: 'pointer',
          },
          borderRadius: '8px',
        },
      }),
    },
    TextInput: {
      styles: (theme) => ({
        required: {
          color: theme.other.colors.canyon[0],
        },
      }),
    },
    NumberInput: {
      styles: (theme) => ({
        required: {
          color: theme.other.colors.canyon[0],
        },
      }),
    },
    Select: {
      styles: (theme) => ({
        required: {
          color: theme.other.colors.canyon[0],
        },
      }),
    },
    Radio: {
      styles: (theme) => ({
        radio: {
          border: `1px solid ${theme.other.colors.canyon[0]}`,
          '&:checked': {
            border: `1px solid ${theme.other.colors.canyon[0]}`,
            backgroundColor: 'white',
          },
        },
        icon: {
          color: theme.other.colors.digitalBlueBonnet,
        },
      }),
    },
  },
};

export default mantineTheme;
