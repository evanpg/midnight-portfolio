/**
 * Counter contract API.
 * 
 * This file re-exports the generated contract code and witness implementations,
 * providing a single entry point for consuming applications.
 */

// Re-export all generated contract types and functions
export * as Counter from './managed/counter/contract/index.js';

// Re-export witness implementations and types
export * from './witnesses.js';