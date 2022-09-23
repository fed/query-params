import { escape, trim } from 'lodash';

export function getSanitizedString(str: string | undefined): string | undefined {
  if (!str) {
    return;
  }

  return escape(trim(str));
}
