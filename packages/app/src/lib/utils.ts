import type { BigNumberish } from 'fuels';
import urljoin from 'url-join';

import { MAX_U64_STRING } from '~/config';

const { PUBLIC_URL } = process.env;

export const objectId = (value: string) => ({
  value,
});

// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const relativeUrl = (path: string) => urljoin(PUBLIC_URL || '/', path);

export const isSwayInfinity = (value: BigNumberish | null) => value?.toString() === MAX_U64_STRING;
