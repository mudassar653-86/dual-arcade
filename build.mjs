import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
if (!html.includes('<!DOCTYPE html>')) throw new Error('index.html is missing a doctype.');
if (!existsSync('package.json')) throw new Error('package.json is missing.');
console.log('Duel Arcade static build validation passed.');
