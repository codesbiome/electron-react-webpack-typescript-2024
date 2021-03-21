/**
 * Checks if process NODE_ENV in 'development' mode
 */
export function inDev(): boolean {
  return process.env.NODE_ENV == 'development';
}

/**
 * Prints message in Console
 * @param text Message to print
 */
export function say(text: string): void {
  console.log('[ERWT]: ' + text);
}
