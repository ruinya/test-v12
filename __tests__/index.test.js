// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/menu.js __fixtures__/menu1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/menu.js __fixtures__/menu2.csv',
  // @ts-ignore
  options,
);

const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Count: 20');
  assert.strictEqual(rows2[0], 'Count: 18');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Categories: Мясные блюда, Рыбные блюда, Салаты, Паста, Пицца, Супы, Суши, Завтраки, Морепродукты, Ризотто, Гарниры, Бургеры');
  assert.strictEqual(rows2[1], 'Categories: Паста, Мясные блюда, Рыбные блюда, Салаты, Азиатская кухня, Супы, Завтраки, Гарниры, Морепродукты, Рисовые блюда, Десерты');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Average price: 16');
  assert.strictEqual(rows2[2], 'Average price: 14');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Calories: min - Мисо суп, max - Пицца Маргарита');
  assert.strictEqual(rows2[3], 'Calories: min - Французский луковый суп, max - Плов с курицей');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Most profitable dish: Суп Том Ям');
  assert.strictEqual(rows2[4], 'Most profitable dish: Картофельное пюре');
});
