import {
  render,
  screen,
} from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Verificar componente GifGridItem", () => {
  const title = "Luffy";
  const url = "https://onepiece.com/luffy.gif";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Verificar que title y url son strings", () => {
    expect(typeof title).toBe("string");
    expect(typeof url).toBe("string");
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    // screen.debug()

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrase el titulo en un parrafo', () => { 
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
   })
});
