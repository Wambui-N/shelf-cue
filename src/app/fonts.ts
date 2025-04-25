import localFont from 'next/font/local';

export const satoshiLight = localFont({
  src: './fonts/Satoshi-Light.otf',
  variable: '--font-satoshi-light',
  weight: '300',
});

export const satoshiRegular = localFont({
  src: './fonts/Satoshi-Regular.otf',
  variable: '--font-satoshi-regular',
  weight: '400',
});

export const satoshiMedium = localFont({
  src: './fonts/Satoshi-Medium.otf',
  variable: '--font-satoshi-medium',
  weight: '500',
});

export const satoshiBold = localFont({
  src: './fonts/Satoshi-Bold.otf',
  variable: '--font-satoshi-bold',
  weight: '700',
}); 