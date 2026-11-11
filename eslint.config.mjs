import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/*", "node_modules/*", "build/*", "next-env.d.ts"],
  },
];

export default eslintConfig;
