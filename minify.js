#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple minification functions
const minifyCSS = (css) => {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
    .replace(/\s+/g, ' ') // Collapse all whitespace
    .replace(/\s*([{}:;,>+~])\s*/g, '$1') // Remove spaces around syntax
    .trim();
};

const isWhitespace = (char) => /\s/.test(char);
const isWordChar = (char = '') => /[A-Za-z0-9_$]/.test(char);

const minifyJS = (js) => {
  let output = '';
  let index = 0;
  let state = 'normal';

  while (index < js.length) {
    const char = js[index];
    const next = js[index + 1];

    if (state === 'lineComment') {
      if (char === '\n') {
        state = 'normal';
      }
      index += 1;
      continue;
    }

    if (state === 'blockComment') {
      if (char === '*' && next === '/') {
        state = 'normal';
        index += 2;
        continue;
      }
      index += 1;
      continue;
    }

    if (state === 'singleQuote') {
      output += char;
      if (char === '\\' && next) {
        output += next;
        index += 2;
        continue;
      }
      if (char === "'") {
        state = 'normal';
      }
      index += 1;
      continue;
    }

    if (state === 'doubleQuote') {
      output += char;
      if (char === '\\' && next) {
        output += next;
        index += 2;
        continue;
      }
      if (char === '"') {
        state = 'normal';
      }
      index += 1;
      continue;
    }

    if (state === 'template') {
      output += char;
      if (char === '\\' && next) {
        output += next;
        index += 2;
        continue;
      }
      if (char === '`') {
        state = 'normal';
      }
      index += 1;
      continue;
    }

    if (char === '/' && next === '/') {
      state = 'lineComment';
      index += 2;
      continue;
    }

    if (char === '/' && next === '*') {
      state = 'blockComment';
      index += 2;
      continue;
    }

    if (char === "'") {
      state = 'singleQuote';
      output += char;
      index += 1;
      continue;
    }

    if (char === '"') {
      state = 'doubleQuote';
      output += char;
      index += 1;
      continue;
    }

    if (char === '`') {
      state = 'template';
      output += char;
      index += 1;
      continue;
    }

    if (isWhitespace(char)) {
      let lookahead = index;
      while (lookahead < js.length && isWhitespace(js[lookahead])) {
        lookahead += 1;
      }

      const previousChar = output[output.length - 1];
      const nextChar = js[lookahead];

      if (isWordChar(previousChar) && isWordChar(nextChar)) {
        output += ' ';
      }

      index = lookahead;
      continue;
    }

    output += char;
    index += 1;
  }

  return output.trim();
};

try {
  // Minify CSS
  const cssPath = path.join(__dirname, 'Styles', 'styles.css');
  const cssMinPath = path.join(__dirname, 'Styles', 'styles.min.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  const cssMin = minifyCSS(cssContent);
  fs.writeFileSync(cssMinPath, cssMin);
  
  const cssOriginal = fs.statSync(cssPath).size;
  const cssMinified = fs.statSync(cssMinPath).size;
  const cssSavings = ((1 - cssMinified / cssOriginal) * 100).toFixed(2);
  
  console.log(`✓ CSS minified: ${cssOriginal} → ${cssMinified} bytes (${cssSavings}% reduction)`);

  // Minify JavaScript
  const jsPath = path.join(__dirname, 'JavaScript', 'script.js');
  const jsMinPath = path.join(__dirname, 'JavaScript', 'script.min.js');
  const jsContent = fs.readFileSync(jsPath, 'utf8');
  const jsMin = minifyJS(jsContent);
  fs.writeFileSync(jsMinPath, jsMin);
  
  const jsOriginal = fs.statSync(jsPath).size;
  const jsMinified = fs.statSync(jsMinPath).size;
  const jsSavings = ((1 - jsMinified / jsOriginal) * 100).toFixed(2);
  
  console.log(`✓ JS minified: ${jsOriginal} → ${jsMinified} bytes (${jsSavings}% reduction)`);

  console.log('\n✓ Minification complete!');
  console.log('Update your HTML files to use:');
  console.log('  <link rel="stylesheet" href="/Styles/styles.min.css">');
  console.log('  <script src="/JavaScript/script.min.js"><\\/script>');
  
} catch (error) {
  console.error('❌ Minification failed:', error.message);
  process.exit(1);
}
