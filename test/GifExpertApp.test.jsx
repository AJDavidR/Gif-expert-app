import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Validar componete GifExpertApp', () => {
  const category = 'dark souls';

  test('debe tener el titulo', () => {
    render(<GifExpertApp />);

    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  });

  test('debe retornar categories state', async () => {
    render(<GifExpertApp />);
    expect(screen.getByText('One piece')).toBeTruthy();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: category } });

    fireEvent.submit(input);

    expect(screen.getByText(category)).toBeTruthy();
  });
});
