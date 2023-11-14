// npm run start

import { vmi } from './test-script';

async function main() {
    console.log('szia');
    console.log(vmi(2));
}

main().catch(e => console.error('Main failed:', e));
