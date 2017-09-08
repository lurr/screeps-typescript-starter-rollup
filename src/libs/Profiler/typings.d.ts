interface Memory {
  profiler: ProfilerMemory;
}

interface ProfilerMemory {
  data: { [name: string]: ProfilerData };
  start?: number;
  total: number;
}

interface ProfilerData {
  calls: number;
  time: number;
}

interface Profiler {
  clear(): void;
  output(): void;
  start(): void;
  status(): void;
  stop(): void;
  toString(): string;
}

declare const __PROFILER_ENABLED__: boolean;
