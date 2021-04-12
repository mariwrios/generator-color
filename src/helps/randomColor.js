export const randomColor = () => {
  const hexaColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  let cajita = ""

  for (let i = 1; i <= 6; i++) {
    let azar = 0 + Math.random() * (15 - 0)
    cajita = cajita + hexaColor[parseInt(azar)]
  }
  return cajita
}
