const path = require('path');
const fs = require('fs');

const inputFileName = 'codes.json';
const outputFileName = 'index.ts';
const defaultIndentNum = 1;

function genIndent(num) {
  return new Array(num).fill('  ');
}

function genLine(content, indentNum = defaultIndentNum) {
  return `${genIndent(indentNum)}${content}\n`;
}

const jsonStr = fs.readFileSync(path.join(__dirname, inputFileName), 'utf-8');
const codeJSON = JSON.parse(jsonStr);
const msgContents = [];
const enumContents = [];
for (let module of codeJSON.modules) {
  let msgContent = genLine(`// ${module.name} ${module.range}`);
  let enumContent = msgContent;
  for (let code of module.codes) {
    const msg = code.msg.replace(/'/g, '\\\'');
    msgContent += code.code < 0 ?
      genLine(`[${code.code}]: '${msg}',`) :
      genLine(`${code.code}: '${msg}',`);
    enumContent += genLine(`${code.var} = ${code.code},`);
  }
  msgContents.push(msgContent);
  enumContents.push(enumContent);
}
const outputContent = `export const codeMsgs = {
${msgContents.join('\n')}};

export enum Codes {
${enumContents.join('\n')}}
`;
fs.writeFileSync(path.join(__dirname, outputFileName), outputContent, 'utf-8');
