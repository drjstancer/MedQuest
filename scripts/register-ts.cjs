/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const Module = require('module');
const path = require('path');
const ts = require('typescript');

const workspaceRoot = path.resolve(__dirname, '..');
const srcRoot = path.join(workspaceRoot, 'src');
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveFilename(
  request,
  parent,
  isMain,
  options
) {
  if (request.startsWith('@/')) {
    const mappedRequest = path.join(
      srcRoot,
      request.slice(2)
    );

    return originalResolveFilename.call(
      this,
      mappedRequest,
      parent,
      isMain,
      options
    );
  }

  return originalResolveFilename.call(
    this,
    request,
    parent,
    isMain,
    options
  );
};

require.extensions['.ts'] = function compileTypeScript(
  module,
  filename
) {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filename,
  });

  module._compile(output.outputText, filename);
};
