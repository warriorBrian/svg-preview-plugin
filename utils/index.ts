import path from 'path'
import { fileURLToPath } from 'url';

let dirname: string;

// 检查是否在 ESM 环境中
const isESM = typeof import.meta !== 'undefined';

if (isESM) {
  // ESM 环境下使用 import.meta.url
  const __filename = fileURLToPath(new URL(import.meta.url));
  dirname = path.dirname(__filename);
} else if (typeof __dirname !== 'undefined') {
  // CommonJS 环境下直接使用 __dirname
  dirname = __dirname;
} else {
  // 降级方案：使用当前工作目录
  dirname = process.cwd();
}

const resolve = (filePath: string) => path.resolve(dirname, filePath)

export {
  resolve
}