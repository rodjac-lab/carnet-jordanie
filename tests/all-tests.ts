import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { foodExperiences } from '../src/data/foodExperiences.ts';
import { readingRecommendations } from '../src/data/readingRecommendations.ts';

describe('public content', () => {
  it('keeps the food page populated with stable cards', () => {
    assert.equal(foodExperiences.length, 4);
    assert.deepEqual(
      foodExperiences.map((experience) => experience.id),
      ['mansaf', 'falafel-houmous', 'grillades', 'mint-tea-arabic-coffee'],
    );
  });

  it('keeps reading recommendations complete enough to render', () => {
    assert.ok(readingRecommendations.length >= 4);
    readingRecommendations.forEach((book) => {
      assert.ok(book.title);
      assert.ok(book.author);
      assert.ok(book.description);
      assert.ok(book.why);
    });
  });
});
