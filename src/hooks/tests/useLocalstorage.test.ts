//act
import { renderHook } from "@testing-library/react";

import { useLocalstorage } from "..";

describe("useLocalstorage", () => {
  test("should return an object with lsValue and setLsValue properties", () => {
    const { result } = renderHook(() => useLocalstorage("testKey"));
    expect(typeof result.current.lsValue).toBe("object");
    expect(typeof result.current.setLsValue).toBe("function");
  });

  test("should use the defaultValue if localStorage does not have a saved value for the given key", () => {
    const defaultValue = null;
    const { result } = renderHook(() =>
      useLocalstorage("testKey", defaultValue)
    );
    expect(result.current.lsValue).toBe(defaultValue);
  });
});
