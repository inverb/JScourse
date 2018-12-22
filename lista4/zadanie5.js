var ans;
process.stdout.write(`Wpisz swoje imię: `);
process.stdin.on('readable', () => {
    ans = process.stdin.read();
    process.stdout.write(`Witaj ${ans}`);
});