import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// KV holds prerendered pages and the fetch cache. The queue rebuilds pages once
// their hourly `revalidate` window passes; without it they never refresh.
// No tag cache: the only revalidatePath calls are in the retired Starter
// portfolio manager, which next.config.js redirects away from. Add a D1 tag
// cache if on-demand revalidation is ever needed.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
  queue: memoryQueue,
});
