declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

//Isso diz ao TypeScript como lidar com CSS Modules.
// Ele informa ao TypeScript que quando você importar um arquivo CSS Module, ele deve tratar isso como um objeto onde as chaves são strings e os valores também são strings.
// Isso é útil para evitar erros de tipo ao usar CSS Modules em seu código TypeScript.

declare module '*.css';

//Esse arquivo declara que qualquer importação de .css é um módulo válido, o que resolve o erro TS2307.

// Isso é útil para evitar erros de tipo ao usar arquivos CSS em seu código TypeScript.