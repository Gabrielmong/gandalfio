import { act, renderHook } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import { darkTheme, lightTheme, useThemeMode } from 'theme';

afterEach(() => vi.restoreAllMocks());

it('defaults to dark', () => {
  expect(renderHook(useThemeMode).result.current.mode).toBe('dark');
});

it('restores a stored light preference', () => {
  localStorage.setItem('theme', 'light');
  expect(renderHook(useThemeMode).result.current.mode).toBe('light');
});

it('ignores a garbage stored value', () => {
  localStorage.setItem('theme', 'purple');
  expect(renderHook(useThemeMode).result.current.mode).toBe('dark');
});

it('survives localStorage throwing', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new Error('blocked');
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('blocked');
  });
  const { result } = renderHook(useThemeMode);
  expect(result.current.mode).toBe('dark');
  act(() => result.current.toggle());
  expect(result.current.mode).toBe('light');
});

it('toggles and persists', () => {
  const { result } = renderHook(useThemeMode);
  act(() => result.current.toggle());
  expect(result.current.mode).toBe('light');
  expect(localStorage.getItem('theme')).toBe('light');
});

it('uses the navy background in dark mode', () => {
  expect(darkTheme.palette.mode).toBe('dark');
  expect(darkTheme.palette.background.default).toBe('#0f1c2b');
  expect(darkTheme.palette.background.paper).toBe('#16283d');
});

it('keeps a light theme', () => {
  expect(lightTheme.palette.mode).toBe('light');
});
