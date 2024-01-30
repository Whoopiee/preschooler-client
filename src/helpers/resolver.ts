export function resolveImage(path: string): string {
  return `${import.meta.env.VITE_FILES_API_URL}/images/${path}`;
}

export function resolveAudio(path: string): string {
  return `${import.meta.env.VITE_FILES_API_URL}/audio/${path}`;
}

export function resolveTask(path: string): string {
  return `${import.meta.env.VITE_FILES_API_URL}/audio/task/${path}`;
}
