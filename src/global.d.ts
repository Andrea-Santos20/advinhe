declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

//Isso diz ao TypeScript como lidar com CSS Modules.
// Ele informa ao TypeScript que quando você importar um arquivo CSS Module, ele deve tratar isso como um objeto onde as chaves são strings e os valores também são strings.
// Isso é útil para evitar erros de tipo ao usar CSS Modules em seu código TypeScript.