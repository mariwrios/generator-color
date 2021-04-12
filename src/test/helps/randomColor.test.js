import { randomColor } from "../../helps/randomColor"

describe("Probando la funcion handleColor", () => {
  test("Debe retornar un valor de 6 digitos", () => {
    expect(randomColor().length).toBe(6)
  })
})
