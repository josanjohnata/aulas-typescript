type User = {
  name: string;
  lastName: string;
  birthDate: string;
  age?: number;
}

const josan: User = {
  name: 'Josan',
  lastName: 'Johnata',
  birthDate: '17/03/1992'
}

// Union types quando existe alguma comparação de valores.
// | (como se foss o ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] ${message}`);
}

logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'error');
logMessage('uma mensagem info', 'debug');
