import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Validar Componente GifGrid', () => {
  const category = 'dark souls';

  test('debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: '1',
        title: category,
        url: 'http://darksouls.com',
      },
      {
        id: '2',
        title: 'elden ring',
        url: 'http://eldenring.com',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
