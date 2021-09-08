let gatos: string[] = [
  'Milk',
  'Kiko',
  'Logan'
];

gatos.push('Lebeau');

function exibeGatos(gatos: string[]) {
  return `Os gatos são: ${gatos.join(', ')}`;
}

console.log(exibeGatos(gatos));