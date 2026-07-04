import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

import { foodExperiences } from '../src/data/foodExperiences.ts';
import { readingRecommendations } from '../src/data/readingRecommendations.ts';

describe('public content', () => {
  it('keeps the food page populated', () => {
    assert.ok(foodExperiences.length >= 1);
    foodExperiences.forEach((experience) => {
      assert.ok(experience.id);
      assert.ok(experience.name);
      assert.ok(experience.description);
    });
  });

  it('keeps reading recommendations complete enough to render', () => {
    assert.ok(readingRecommendations.length >= 1);
    readingRecommendations.forEach((book) => {
      assert.ok(book.title);
      assert.ok(book.author);
      assert.ok(book.description);
      assert.ok(book.why);
    });
  });
});

describe('image integrity', () => {
  const root = process.cwd();
  const photoDir = path.join(root, 'public', 'jordan', 'selected-v1');

  const sourceFiles = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return sourceFiles(full);
      return /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
    });

  it('every image referenced in src/ exists in public/jordan/selected-v1/', () => {
    const referenced = new Set<string>();
    for (const file of sourceFiles(path.join(root, 'src'))) {
      const source = readFileSync(file, 'utf8');
      for (const match of source.matchAll(/image\("([^"]+)"\)/g)) {
        referenced.add(match[1]);
      }
    }

    assert.ok(referenced.size > 0, 'no image() references found — regex out of sync?');

    const missing = [...referenced].filter(
      (name) => !existsSync(path.join(photoDir, `${name}.webp`)),
    );
    assert.deepEqual(missing, [], `missing photos: ${missing.join(', ')}`);
  });

  it('og-image referenced by index.html exists', () => {
    assert.ok(existsSync(path.join(root, 'public', 'og-image.webp')));
  });
});
