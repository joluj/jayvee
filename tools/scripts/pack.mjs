import {execSync} from 'child_process';
import {getOutputPath} from "./shared-util.mjs";

// Executing this script: node path/to/pack.mjs {projectName}
const [, , projectName] = process.argv;

process.chdir(getOutputPath(projectName));

execSync(`npm pack`);
