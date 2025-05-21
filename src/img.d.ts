declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

// Esse código diz ao TypeScript que, quando você importar um arquivo .svg, ele pode ser tratado de duas formas:

// Como um caminho de imagem (default src)

// Ou como um componente React (ReactComponent)