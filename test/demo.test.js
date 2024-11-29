describe("first", () => {
  test("should first", () => {
    const message1 = "test";
    const message2 = message1.trim();
    expect(message2).toBe(message1);
  });
});
