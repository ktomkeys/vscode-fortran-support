export const LANG_SERVER_TOOL_ID = 'fortran-langserver';
import * as cp from 'child_process';
export const toolBinNames = {
  [LANG_SERVER_TOOL_ID]: 'fortls',
  'gnu-compiler': 'gfortran',
};

export function installTool(toolname) {
  if (toolname === LANG_SERVER_TOOL_ID) {
    const installProcess = cp.spawn(
      'pip',
      'install fortran-language-server'.split(' ')
    );
    installProcess.on('exit', (code, signal) => {
      if (code !== 0) {
        // extension failed to install
      }
    });
    installProcess.on('error', err => {
      // failed to install
    });
  }
}

export class StringInterpolator {
    constructor(variables_to_substitute: Map<string, string>) {
        this.variables_to_substitute = variables_to_substitute;
    }
    interpolate(str: string): string {
        return str.replace(/\$\{(\w+)\}/g, (_, name) => this.variables_to_substitute.get(name) || '?');
    }
    private variables_to_substitute: Map<string, string>;
}
