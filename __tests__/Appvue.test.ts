import { test, describe, expect } from "vitest";
import { mount } from '@vue/test-utils';

import App from '../src/App.vue'

describe('App.vue', () => {
  const wrapper = mount(App);

  test('標題是否為 IsRayNotArray 正確', () => {
    const text = wrapper.text();
    expect(text).toBe('IsRayNotArray');
  });
});