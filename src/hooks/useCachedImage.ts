
import { useCached } from './useCached';

export function useCachedImage(url: string) {
  return useCached<string>(url, async () => {
    return url; // Simplified: should integrate FS cache logic
  });
}
