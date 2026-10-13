import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Componentes copiados de React Bits: mantienen el patrón "latest ref"
    // del original (ref.current = props durante el render) para que sigan
    // siendo fáciles de comparar y actualizar con la versión de reactbits.dev.
    files: ["components/reactbits/**"],
    rules: {
      "react-hooks/refs": "off",
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
