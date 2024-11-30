import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Validar el hook useFetchGifs', () => {
  const category = 'elden ring';

  test('debe regresar al estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
  });

  test('debe retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 5000,
      }
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
