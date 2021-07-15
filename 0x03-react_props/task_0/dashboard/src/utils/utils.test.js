import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Year is 2021', () => {
        expect(getFullYear().toString()).toBe('2021');
});

test('getFooterCopy returns the correct string when the argument is true or false', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('checks the returned string for getLatestNotification', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});