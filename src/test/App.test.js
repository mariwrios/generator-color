import App from "../App"
import React from "react"
import "@testing-library/jest-dom"
import { shallow } from "enzyme"

describe("Probando <App/>", () => {
  const wrapper = shallow(<App />)
  test("should ", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("Probando que el onClick cambie el estado", () => {
    const p = wrapper.find("p").text()
    wrapper.find("button").simulate("click")
    const p2 = wrapper.find("p").text()
    expect(p).not.toBe(p2)
  })
  test("Probar que llega un valor hexadecimal de 6 y el # digitos al presionar el boton", () => {
    wrapper.find("button").simulate("click")
    const p = wrapper.find("p").text()
    expect(p.length).toBe(7)
    expect(p).toContain("#")
  })
  test("Probando que a la card le llegue el carColor", () => {
    const { style } = wrapper
      .find("div")
      .at(1)
      .props("style")

    expect(style.background.length).toBe(7)
  })
})
